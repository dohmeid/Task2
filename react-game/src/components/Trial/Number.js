import { forwardRef, useState } from 'react';
import classes from './Number.module.css';

const Number = forwardRef(({ enableState, index, selectedIndex, setSelectedIndex }, ref) => {

    const [disabled, setDisabled] = useState(true);

    //to prevent user from typing the number - only choose from the number input field arrows 
    document.addEventListener('keypress', (e) => {
        e.preventDefault();
    });

    if (index === selectedIndex && enableState === true) {
        setSelectedIndex(index + 1);
        setDisabled(false);
    }

    return (
        <input ref={ref} type="number" min='0' max='9' className={classes.number} disabled={disabled} />
    );
});

export default Number;