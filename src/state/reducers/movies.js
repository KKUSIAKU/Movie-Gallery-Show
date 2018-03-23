import { ACTIONS, DEFAULT_STATE } from "../config";

function movies(state = DEFAULT_STATE.MOVIES, action) {
  let newState;
  switch (action.type) {
    case ACTIONS.REQUEST_MOVIES:
      console.log("request sent to the server");
      return state;
    case ACTIONS.RECEIVE_MOVIES:
      console.log("received movies data");
      newState= Object.assign({}, state); 
      newState[action.page] = action.data;     
      return newState;
    case ACTIONS.REQUEST_MOVIES_FAILED:
      console.log("movies request failed");
      return state;
    default:
      return state;
  }
}

export default movies; 