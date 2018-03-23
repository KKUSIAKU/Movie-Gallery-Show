import { ACTIONS, DEFAULT_STATE } from "../config"; 
function numberOfPages(state = DEFAULT_STATE.NUMBER_OF_PAGES, action){
  switch (action.type) {
    case ACTIONS.SET_NUMBER_OF_PAGE:
      return action.numberOfpage;   
    default:
      return state; 
  }
}

export default numberOfPages; 