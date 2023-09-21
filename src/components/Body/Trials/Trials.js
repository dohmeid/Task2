import React from 'react';
import TrialRow from './TrialRow/TrialRow';
import { NUMBER_OF_ALLOWED_TRIALS } from '../Body.service';
import classes from './Trials.module.css';

const Trials = (props) => {

    return (
        <div className={`${classes.row}`}>

            {Array(NUMBER_OF_ALLOWED_TRIALS).fill().map((row, i) =>
                <TrialRow key={i} rowIndex={i + 1}
                    selectedIndex={props.selectedIndex} setSelectedIndex={props.setSelectedIndex}
                    secretCode={props.secretCode}
                    setGameStatus={props.setGameStatus}
                    clearScreen={props.clearScreen} setClearScreen={props.setClearScreen} />
            )}

        </div>
    );
};

export default Trials;