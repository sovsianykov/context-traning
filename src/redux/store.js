import { createStore,applyMiddleware,combineReducers,compose } from "redux";
import thunk from "redux-thunk";
import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
    newsReducer : newsReducer
})



const store = createStore(rootReducer, compose( applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;