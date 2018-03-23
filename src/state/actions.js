import { ACTIONS } from "./config"; 

import store from "./store.js";


function setPage(page){
  return {
    type:ACTIONS.SET_PAGE, 
    page
  };
}



function setNumberOfResult(numberOfResult){
  return {
    type:ACTIONS.SET_NUMBER_OF_RESULT, 
    numberOfResult
  };
}

function requestMovies() {
  return {
    type: ACTIONS.REQUEST_MOVIES,
  };
}

function receiveMovies(data,page){
  return {
    type:ACTIONS.RECEIVE_MOVIES, 
    data,
    page,
  };
}

export function fetchAllMovies(url, options) {
  var {movies} = store.getState(); 
  
  if (movies.hasOwnProperty(options.page)){
    return store.dispatch(setPage(options.page));
  }
  console.log("start fetching");

  return function (dispatch) {
    var httpRequest = new XMLHttpRequest();

    dispatch(requestMovies());

    httpRequest.onreadystatechange = function () {
      var result;
      switch (httpRequest.readyState) {
        case XMLHttpRequest.UNSENT:
          break; 
        case XMLHttpRequest.LOADING:
          break;
        case XMLHttpRequest.DONE:
          result= JSON.parse(httpRequest.response);
          dispatch(setNumberOfResult (result.numberOfResult)); 
          dispatch(receiveMovies(result.movies,options.page));
      }
    };

    url +=`?page=${options.page}`;// need checking

    httpRequest.open("GET", url, true);
    httpRequest.setRequestHeader("Accept", "json"); 
    httpRequest.setRequestHeader("Content-Type", "application/json"); 
    httpRequest.send(null);

  };
}

export function setFilter(filter){
  return {
    type:ACTIONS.SET_FILTER,
    filter
  };
}



// fetchMovies;