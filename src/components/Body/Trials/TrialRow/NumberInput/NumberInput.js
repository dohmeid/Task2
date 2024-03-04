import React, { forwardRef, useEffect, useState } from 'react';
import classes from './NumberInput.module.css';

const NumberInput = forwardRef(({ enableState, clearScreen }, ref) => { //ref is used to forward the input's number to the TrialRow component 

    const [inputValue, setInputValue] = useState("");

    //to remove the last number from the input field if the screen needs to be cleared
    useEffect(() => {
        if (clearScreen) {
            setInputValue("");
        }
    }, [clearScreen])

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    //to prevent user from entering texts, only numbers are allowed
    document.addEventListener('keypress', (e) => {
        var key = e.keyCode;
        if (key < 48 || key > 57) {
            e.preventDefault();
        }
    });

    return (
        <input type="text" min='0' max='9' maxLength='1' className={classes.number}
            ref={ref} value={inputValue} disabled={!enableState}
            onChange={handleChange} />
    );
});

export default NumberInput;