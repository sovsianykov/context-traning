import { GET_NEWS } from "./types";
import axios from 'axios';

export function getNews(uri) {
    const URL =
        `https://newsapi.org/v2/top-headlines?country=${uri}&apiKey=68727f2539f4484e879d14c9566a1a99`
    return async dispatch =>
    {
        const response = await axios.get(URL)
        dispatch({type: GET_NEWS, payload : response.data.articles})

    }
}