import React, {useState} from 'react';
import { Board, Header } from '../components';
import data from '../bolly-movies-combis.json';

import './game.css';

//export class Game extends PureComponent {
const Game = () => {
    
    const randomGameNumber = Math.floor(Math.random() * ((data.games.length - 1) - 0 ) + 0)
    
    const [ gameNo, setGameNo ] = useState(randomGameNumber)
    const [ spyMaster, setSpyMaster ] = useState(false)
    const [ tilesOpen, setTileOpen ] = useState(Array(25).fill(false))

    const gamePlan = data.games[gameNo]

    const changeSpyMode = (e) => {
        setSpyMaster(e.target.checked);
    }

    const changeGameNo = (e) => {
        let newGameNo = e.target.value
        if (e.target.value === '') {
            newGameNo = Math.floor(Math.random() * ((data.games.length - 1) - 0 ) + 0)
        }
        
        setGameNo(newGameNo)
        setSpyMaster(false)
        setTileOpen(Array(25).fill(false))
    }

    const tileClicked = (event) => {
        let tileNo = event.target.getAttribute('data-index')
        let tilesState = [...tilesOpen]
        tilesState[tileNo] = true
        setTileOpen(tilesState)
    }
    
    return ( 
            <div className='game-container'>
                <Header gameNo={gameNo} setGameNo={changeGameNo} sMValue={spyMaster} onCheckboxClick={changeSpyMode} />
                <Board movies={gamePlan.movieList}
                   nines={new Set(gamePlan.nine)}
                   eights={new Set(gamePlan.eight)}
                   nineColor={gamePlan.nineColor}
                   killer={gamePlan.killer}
                   fullOpen={spyMaster}
                   tilesState={tilesOpen}
                   tileClicked={tileClicked} />
            </div>
    )
}

export default Game;





