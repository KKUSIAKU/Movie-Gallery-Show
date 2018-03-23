import movies from "./movies.js";
import page from "./page.js"; 
import numberOfPages from "./numberOfpages.js";
import numberOfResult from "./numberOfResult.js";
import filter from "./filter.js";
import filters from "./filters.js";

import { combineReducers} from "redux"; 

export default combineReducers({movies, page,numberOfPages, numberOfResult, filter, filters});
