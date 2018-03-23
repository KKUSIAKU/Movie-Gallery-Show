
function rootReducer(state={}, action){
  switch(action.type){
    case "REQUEST-MOVIES":
      console.log("request sent to the server"); 
      return state; 
    case "RECEIVE-MOVIES":
      console.log("received movies data");
      return Object.assign({}, state, {MOVIES:action.data}); 
    case "REQUEST-MOVIES-FAILED":
      console.log("movies request failed"); 
      return state; 
    default:
      return state; 
  }
}

export default rootReducer; 