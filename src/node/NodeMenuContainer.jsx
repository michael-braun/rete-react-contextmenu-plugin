import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const NodeMenuContainer = ({ component: Component, node, editor, ...props }) => {
    const handleDelete = useCallback(() => {
        editor.removeNode(node);
        editor.trigger('hidecontextmenu');
    }, [editor, node]);

    return (
        <Component
            onDelete={handleDelete}
            editor={editor}
            node={node}
            {...props}
        />
    );
};

NodeMenuContainer.propTypes = {
    Component: PropTypes.any,
    node: PropTypes.object,
};

export default NodeMenuContainer;
