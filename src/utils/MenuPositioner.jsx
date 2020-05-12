import React, { useMemo } from 'react';

const MenuPositioner = ({ root, x, y, children, style: styleProp }) => {
    const style = useMemo(() => ({
        ...styleProp,
        position: 'absolute',
        top: y,
        left: x,
    }), [styleProp, x, y]);

    return (
        <div
            style={style}
        >
            {children}
        </div>
    );
};

MenuPositioner.propTypes = {

};

export default MenuPositioner;
