import React from 'react';
import TrialRow from './TrialRow/TrialRow';
import classes from './Trials.module.css';

const Trials = (props) => {

    const allowedTrialsNumber = 8;

    return (
        <div className={`${classes.row}`}>

            {Array(allowedTrialsNumber).fill().map((row, i) =>
                <TrialRow key={i} rowIndex={i + 1}
                    selectedIndex={props.selectedIndex} setSelectedIndex={props.setSelectedIndex}
                    secretCode={props.secretCode}
                    setGameStatus={props.setGameStatus}
                    clearScreen={props.clearScreen} setClearScreen={props.setClearScreen}
                    GAME_STATUS_WON={props.GAME_STATUS_WON} GAME_STATUS_LOST={props.GAME_STATUS_LOST} />
            )}

        </div>
    );
};

export default Trials;