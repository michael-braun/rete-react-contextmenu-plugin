import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

export function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export async function createNode(component, { data = {}, meta = {}, x = 0, y = 0 }) {
    const node = await component.createNode(deepCopy(data));

    node.meta = Object.assign(deepCopy(meta), node.meta);
    node.position[0] = x;
    node.position[1] = y;

    return node;
}

const ContextMenuContainer = ({ component: Component, node, editor, mousePositionStart, ...props }) => {
    const handleCreateNode = useCallback(async (c) => {
        editor.addNode(await createNode(c, mousePositionStart));
        editor.trigger('hidecontextmenu');
    }, [editor, mousePositionStart]);

    return (
        <Component
            editor={editor}
            node={node}
            onCreateNode={handleCreateNode}
            mousePositionStart={mousePositionStart}
            {...props}
        />
    );
};

ContextMenuContainer.propTypes = {
    Component: PropTypes.any,
    node: PropTypes.object,
};

export default ContextMenuContainer;
