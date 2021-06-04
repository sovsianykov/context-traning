import React, {useEffect, useState} from 'react';
import './styles.scss'
import {Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getNews} from "../../redux/actions";
import { interval } from "rxjs";
import {map, takeWhile} from 'rxjs/operators'
const Header = () => {
    const [displayedNews,setDisplayedNews ] = useState({})
    const dispatch = useDispatch();
    const  state = useSelector(state =>state)


    useEffect(()=>{
        dispatch(getNews('us'))


    },[dispatch])
    console.log(state.newsReducer.isLoaded)
    console.log(displayedNews)
    return (
        <div className='header-container'>
            <Grid container justify='center'>
                <Grid item xs={12} md={8} className='main-news'>
                    <div className="pic-holder">
                        {state.newsReducer.isLoaded ? <img src={state.newsReducer.news[1].urlToImage} alt='main-image'/> :''  }

                    </div>
                </Grid>
                <Grid item xs={12} md={4} className='main-news-txt'>
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;