import React from 'react';
import PropTypes from 'prop-types';
import NodeMenu from './node/NodeMenu';
import NodeMenuContainer from './node/NodeMenuContainer';
import ContextMenuContainer from './context/ContextMenuContainer';
import ContextMenu from './context/ContextMenu';
import {
    COMPONENT_CONTEXT,
    COMPONENT_CONTEXT_CONTAINER,
    COMPONENT_NODE,
    COMPONENT_NODE_CONTAINER
} from './constants/components';

const MenuContainer = ({ root, node, editor, x, y, mousePosition, mousePositionStart, components }) => {
    const Component = node
        ? (components[COMPONENT_NODE_CONTAINER] || NodeMenuContainer)
        : (components[COMPONENT_CONTEXT_CONTAINER] || ContextMenuContainer);

    const ChildComponent = node
        ? (components[COMPONENT_NODE] || NodeMenu)
        : (components[COMPONENT_CONTEXT] || ContextMenu);

    return (
        <Component
            component={ChildComponent}
            x={x}
            y={y}
            mousePosition={mousePosition}
            mousePositionStart={mousePositionStart}
            node={node}
            editor={editor}
            root={root}
        />
    );
};

MenuContainer.propTypes = {

};

export default MenuContainer;
