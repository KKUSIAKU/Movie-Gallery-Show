import {ACTIONS, DEFAULT_STATE } from "../config";

function filters(state = DEFAULT_STATE.FILTERS, action) {
  let filters = ["All"];
  switch (action.type) {
    case ACTIONS.RECEIVE_MOVIES:
      action.data.forEach( function(data){
        filters = filters.concat(data.genres);
      });
      return Array.from(new Set(filters));
    default:
      return state;
  }
}

export default filters;