import classes from './Button.module.css';

function StartButton(props) {

    return (
        <>
            <button className={classes.btn} onClick={props.handleClick}>Start</button>
        </>
    );
}

export default StartButton;