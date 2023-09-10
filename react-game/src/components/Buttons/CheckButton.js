import classes from './Button.module.css';

function CheckButton(props) {

    return (
        <>
            <button className={classes.btn} disabled={!props.enableState} onClick={props.checkButtonClickHandler}>Check</button>
        </>
    );
}

export default CheckButton;