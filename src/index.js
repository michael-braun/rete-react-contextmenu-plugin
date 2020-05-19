import React from 'react';
import ReactDOM from 'react-dom';
import MenuContainer from './MenuContainer';

function install(editor, {
    components = {},
} = {}) {
    editor.bind('hidecontextmenu');
    editor.bind('showcontextmenu');

    let menu = document.createElement('div');
    editor.view.container.appendChild(menu);

    editor.on('hidecontextmenu', () => {
        if (menu) {
            menu.style.display = 'none';
        }
    });

    editor.on('click contextmenu', () => {
        editor.trigger('hidecontextmenu');
    });

    const mousePosition = { x: 0, y: 0 };

    let lastConnectionStart = null;
    editor.on('rendersocket', ({ el, socket, input, output }) => {
        el.addEventListener('pointerdown', () => {
            if (lastConnectionStart) {
                lastConnectionStart = null
            } else {
                lastConnectionStart = {
                    socket,
                    input,
                    output,
                }
            }
        });

        el.addEventListener('pointerup', (e) => {
            e.stopPropagation();
        });
    });

    editor.view.container.addEventListener('pointerup', (e) => {
        if (!lastConnectionStart) return;

        const connectionStart = lastConnectionStart;
        lastConnectionStart = null;
        editor.trigger('contextmenu', { e, node: null, context: connectionStart });
    });

    editor.on('mousemove', ({ x, y }) => {
        mousePosition.x = x;
        mousePosition.y = y;
    });

    editor.on('contextmenu', ({ e, node, context }) => {
        e.preventDefault();
        e.stopPropagation();

        if (!editor.trigger('showcontextmenu', { e, node })) return;

        const [x, y] = [e.clientX, e.clientY];

        menu.style.display = 'block';
        ReactDOM.render((
            <MenuContainer
                editor={editor}
                node={node}
                root={menu}
                context={context}
                x={x}
                y={y}
                mousePosition={mousePosition}
                mousePositionStart={{ ...mousePosition }}
                components={components}
            />
        ), menu);
    });
}

export default {
    name: 'context-menu',
    install
}
