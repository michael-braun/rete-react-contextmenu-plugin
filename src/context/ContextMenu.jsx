import React from 'react';
import PropTypes from 'prop-types';
import MenuPositioner from '../utils/MenuPositioner';
import useComponents from '../utils/useComponents';
import NodeItem from '../node/NodeItem';

const ContextMenu = ({ x, y, root, editor, onCreateNode, context }) => {
    const components = useComponents(editor, context);

    return (
        <MenuPositioner
            x={x}
            y={y}
            root={root}
            editor={editor}
        >
            {components.map((c) => (
                <NodeItem
                    onCreateNode={onCreateNode}
                    key={c.name}
                    component={c}
                />
            ))}
        </MenuPositioner>
    );
};

ContextMenu.propTypes = {

};

export default ContextMenu;
