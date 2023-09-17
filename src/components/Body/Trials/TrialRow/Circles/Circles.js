import React from 'react';
import classes from './Circles.module.css'

const Circles = (props) => {

    return (
        <div className={classes.secondaryContainer}>
            {Array(props.correctNumbersWithIndex).fill().map((blueCircle, i) =>
                <span className={`${classes.circle} ${classes.blueCircle}`} key={i}></span>
            )}

            {Array(props.correctNumbersOnly).fill().map((whiteCircle, j) =>
                <span className={classes.circle} key={j}></span>
            )}

        </div>
    );
}

export default Circles;