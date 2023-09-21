import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    return (
        <button className={classes.btn} onClick={props.buttonClickHandler} disabled={!props.enableState}>{props.type}</button>
    );
};

export default Button;