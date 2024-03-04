import React from 'react';
import Button from '../../Common/Button/Button';
import {GAME_STATUS} from '../Body.service';
import classes from './Results.module.css';

const Results = (props) => {

    return (
        <div className={`${classes.row} ${classes.resultSection}`}>
            <div className={classes.text}>
                <p>{props.resultText}</p>
                <p>Secret code</p>
                {(props.gameStatus === GAME_STATUS.WON || props.gameStatus === GAME_STATUS.LOST) && <p>{props.secretCode}</p>}
            </div>
            <Button buttonClickHandler={props.startButtonClickHandler} enableState={true} type={"start"} />
        </div>
    );
}

export default Results;