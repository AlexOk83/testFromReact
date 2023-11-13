import React from 'react';
import Cell from './Cell';

const Board = () => {
    return (
        <div className="board">
            <Cell color={'white'}   />
            <Cell color={'black'}   />
            <Cell color={'white'}   />
            <Cell color={'black'}   />
        </div>
    );
}

export default Board;