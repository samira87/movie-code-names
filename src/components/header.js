import React from 'react';

const Header = ({gameNo, setGameNo, sMValue, onCheckboxClick }) => {
    return (<div className='game-header'>
        <input className='game-number' type='text' value={gameNo} onChange={setGameNo} />
        <div className='checkbox-wrapper'>
            <input 
                type='checkbox'
                name='spy-master'
                id='spy-master'
                value={sMValue}
                onClick={onCheckboxClick}
                className='spy-master-checkbox'
                 />

            <label htmlFor='spy-master'>SpyMaster</label>
        </div>
    </div>)
}

export default Header