import React from 'react';
import Square from './square';

const Board = ({movies, nines, eights, nineColor, killer, fullOpen, tilesState, tileClicked}) => {

    const board = [...Array(5).keys()].map((i) => {
        const row = [...Array(5).keys()].map((j) => {
                            const idx = 5*i+j
                            const movieName = movies[idx]
                            let color = 'neutral'
                            
                            let eight_color = 'blue'
                            let nine_color = 'red'

                            if (nineColor !== 'R') {
                                nine_color = 'blue'
                                eight_color = 'red'
                            }

                            if (nines.has(idx)) {
                                color = nine_color
                            } 

                            if (eights.has(idx)) {
                                color = eight_color
                            }

                            if (killer === idx) {
                                color = 'grey'
                            }
   
                            return (<div className="board-col" key={j}>
                                        <Square movieName={movieName} color={color} idx={idx} open={tilesState[idx]} fullOpen={fullOpen} squareClick={tileClicked} />
                                    </div>)
                    });
                    
        return (<div className="board-row" key={i}>
                    {row}
                </div>)
    })
    
    return <div className="board-container">{board}</div>;
}

export default Board;