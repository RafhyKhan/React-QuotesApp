import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import { Fragment } from 'react';


/*
This is a wrapper componenet method, need props
We wil use props.children to wrap and display everything

*/
const Layout = (props) => {


    return (
        <Fragment>
            <MainNavigation/>
            <main className={classes.main}>{props.children}</main>
        </Fragment>
    )
}

export default Layout;