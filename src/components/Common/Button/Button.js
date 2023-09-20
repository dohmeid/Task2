import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {

    //defaults are used when props.type === "start"
    let isDisabled = false;
    let buttonClickHandler = props.startButtonClickHandler;

    //otherwise, when props.type === "check"
    if (props.type === "check") {
        isDisabled = !props.enableState;
        buttonClickHandler = props.checkButtonClickHandler;
    }

    return (
        <button className={classes.btn} onClick={buttonClickHandler} disabled={isDisabled}>{props.type}</button>
    );
};

export default Button;