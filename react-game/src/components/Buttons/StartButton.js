import classes from './Button.module.css';

function StartButton({ startButtonClickHandler }) {

    console.log("StartButton 1");
    return (
        <>
            <button className={classes.button} onClick={startButtonClickHandler}>Start</button>
        </>
    );
}

export default StartButton;