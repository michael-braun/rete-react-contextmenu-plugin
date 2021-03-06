import React from 'react';
import MenuPositioner from '../utils/MenuPositioner';

const style = {
    backgroundColor: '#FFFFFF',
    border: '1px solid #E8E8E8',
    boxShadow: '0 0 5px #666666',
};

const itemStyle = {
    padding: '5px',
    cursor: 'pointer',
};

const NodeMenu = ({ editor, x, y, root, onDelete, onClone }) => {
    return (
        <MenuPositioner
            x={x}
            y={y}
            root={root}
            style={style}
            editor={editor}
        >
            <div
                style={itemStyle}
                onClick={onDelete}
            >
                Delete
            </div>
            <div
                style={itemStyle}
                onClick={onClone}
            >
                Clone
            </div>
        </MenuPositioner>
    );
};

NodeMenu.propTypes = {

};

export default NodeMenu;
