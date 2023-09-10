import classes from './NavBar.module.css';

function NavBar() {
    return (
        <div className={classes.container}>
            <h1 className={classes.text}>Find the secret code</h1>
        </div>
    );
}

export default NavBar;