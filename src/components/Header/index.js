import React from 'react';
import './styles.scss'
import {Grid} from "@material-ui/core";
const Header = () => {
    return (
        <div className='header-container'>
            <Grid container justify='center'>
                <Grid item xs={12} md={8} className='main-news'>main photo </Grid>
                <Grid item xs={12} md={4} className='main-news-txt'> text of main news </Grid>
            </Grid>
        </div>
    );
};

export default Header;