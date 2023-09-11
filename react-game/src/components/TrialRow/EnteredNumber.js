import { forwardRef } from 'react';
import classes from './Number.module.css';

const EnteredNumber = forwardRef(({ enableState, clearScreen }, ref) => { //ref is used to forward the input's number to the TrialRow component 

    //to prevent user from entering texts, only numbers are allowed
    document.addEventListener('keypress', (e) => {
        var key = e.keyCode;
        if (key < 48 || key > 57) {
            e.preventDefault();
        }
    });

    //to remove the last number from the input field if the screen needs to be cleared
    return (
        <>
            {(clearScreen === true) && <input ref={ref} type="text" min='0' max='9' defaultValue='' maxLength='1' className={classes.number} disabled={!enableState} />}
            {(clearScreen === false) && <input ref={ref} type="text" min='0' max='9' maxLength='1' className={classes.number} disabled={!enableState} />}
        </>
    );
});

export default EnteredNumber;