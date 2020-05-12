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

    editor.on('mousemove', ({ x, y }) => {
        mousePosition.x = x;
        mousePosition.y = y;
    });

    editor.on('contextmenu', ({ e, node }) => {
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
