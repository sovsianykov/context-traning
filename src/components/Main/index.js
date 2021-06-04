import React, {useEffect} from 'react';
import { Grid } from "@material-ui/core";
import MiddleTool from "./MiddleTool";
import './styles.scss'
import {useDispatch, useSelector} from "react-redux";
import { getNews } from "../../redux/actions";

const Main = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getNews('us'))
    },[dispatch])
    const  newsItem = useSelector(state => state.newsReducer.news)
    console.log(newsItem)
    return (
        <>
            <MiddleTool/>
            <div className='main-container'>
            <Grid container spacing={2} justify='center'>

            </Grid>
        </div>
        </>
    );
};

export default Main;