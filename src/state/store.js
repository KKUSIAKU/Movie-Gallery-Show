//http://localhost:5000/
import {createStore,applyMiddleware } from "redux"; 
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";
import CONSTANTS from "../public/constants.js"; 
import { DEFAULT_STATE} from "./config";

var store;

const url = "/videos"; 
const initialState = {
  movies: DEFAULT_STATE.MOVIES,
  page:DEFAULT_STATE.PAGE,
  numberOfPages:DEFAULT_STATE.NUMBER_OF_PAGES,
  numberOfResult:DEFAULT_STATE.NUMBER_OF_RESULT,
  filters:DEFAULT_STATE.FILTERS
};

//const movies = {};
if (process.env.NODE_ENV != "production") {
  store = createStore(rootReducer, initialState, applyMiddleware(thunk,logger)); 
} else {
  store = createStore(rootReducer, initialState, applyMiddleware(thunk)); 
}


//store.dispatch(fetchAllMovies(url)); 

export default store; 

