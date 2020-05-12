import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const style = {
    padding: '5px',
    cursor: 'pointer',
};

const NodeItem = ({ component, onCreateNode }) => {
    const handleClick = useCallback(() => {
        onCreateNode(component);
    }, [component, onCreateNode]);

    return (
        <div
            onClick={handleClick}
            style={style}
        >
            {component.name}
        </div>
    );
};

NodeItem.propTypes = {
    component: PropTypes.object.isRequired,
};

export default NodeItem;
