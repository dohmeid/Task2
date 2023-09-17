import React from 'react';
import Buttons from '../../Common/Buttons/Buttons';
import classes from './Results.module.css';

const Results = (props) => {

    return (
        <div className={`${classes.row} ${classes.resultSection}`}>
            <div className={classes.text}>
                <p>{props.resultText}</p>
                <p>Secret code</p>
                {(props.gameStatus === props.GAME_STATUS_WON || props.gameStatus === props.GAME_STATUS_LOST) && <p>{props.secretCode}</p>}
            </div>
            <Buttons handleClick={props.startButtonClickHandler} type={"startButton"} />
        </div>
    );
}

export default Results;