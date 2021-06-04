import {GET_NEWS} from "./types";


const initialState = {
    news : [],
    isLoaded : false
}

const newsReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_NEWS :
            return {
                ...state, news : action.payload, isLoaded: true
            };
        default :
            return state;
    }
}

export default newsReducer;