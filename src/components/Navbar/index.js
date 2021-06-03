import React from 'react';
import { AppBar } from "@material-ui/core";
import './styles.scss'

const Navbar = () => {
    return (
        <div>
            <AppBar className='appBar-container'>
                <div className="title"><h1>HOT NEWS</h1></div>
            </AppBar>
        </div>
    );
};

export default  Navbar;