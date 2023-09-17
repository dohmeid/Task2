import React from 'react';
import classes from './Buttons.module.css';

const Buttons = (props) => {

    return (
        <>
            {(props.type === "startButton") && <button className={classes.btn} onClick={props.handleClick}>Start</button>}
            {(props.type === "checkButton") && <button className={classes.btn} onClick={props.checkButtonClickHandler} disabled={!props.enableState} >Check</button>}
        </>
    );
};

export default Buttons;