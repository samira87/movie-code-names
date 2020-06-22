import React from 'react';

export default function Square({open, fullOpen, color, squareClick, movieName, idx}) {
    return ( 
        <button data-index={idx} className={`square ${color} ${(open || fullOpen) ? 'open' : ''}`} onClick={squareClick}>
            {movieName.toLowerCase()}
        </button>
    );
}

