import React, {FC} from 'react';

const Cell: FC<{ color: string }> = ({ color }) => {
    return (
        <div className={`cell ${color}`} />
    );
}

export default Cell;