import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.container}>
            <h1 className={classes.text}>Find the secret code</h1>
        </div>
    );
};

export default Header;