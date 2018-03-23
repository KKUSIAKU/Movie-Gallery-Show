import { ACTIONS, DEFAULT_STATE }  from "../config"; 

function numberOfResult(state = DEFAULT_STATE.NUMBER_OF_RESULT, action){
  switch (action.type) {
    case ACTIONS.SET_NUMBER_OF_RESULT:
      return action.numberOfResult;   
    default:
      return state; 
  }
}

export default numberOfResult; 