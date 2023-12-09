import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <ul>
                    <li><NavLink to='/quotes' activeClassName={classes.active}>Great Quotes</NavLink></li>
                </ul>
            </div>
            <nav className={classes.nav}>
                <ul>
                    <li><NavLink to='/quotes' activeClassName={classes.active}> All Quotes</NavLink></li>
                </ul>
                <ul><text></text></ul>
                <ul>
                    <li><NavLink to='/new-quotes' activeClassName={classes.active}> Add a Quote</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;