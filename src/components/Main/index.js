import React from 'react';
import { Grid } from "@material-ui/core";
import MiddleTool from "./MiddleTool";
import './styles.scss'

const Main = () => {
    return (
        <>
            <MiddleTool/>
            <div className='main-container'>
            <Grid container spacing={2} justify='center'>
                <h2>Main</h2>
            </Grid>
        </div>
        </>
    );
};

export default Main;