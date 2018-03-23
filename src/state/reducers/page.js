import { ACTIONS, DEFAULT_STATE } from "../config"; 

function page(state = DEFAULT_STATE.PAGE,action){
  switch(action.type){
    case ACTIONS.SET_PAGE: 
      return action.page; 
    default:
      return state; 
  }
}

export default page; 