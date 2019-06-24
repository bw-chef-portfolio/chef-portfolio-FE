import {LOGINFETCH,LOGINSUCCESS,LOGINFAILURE} from "../actions";

const initialState = {
    isLoadingLOGIN:false,
    successLOGIN:false,
    user:""
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGINFETCH:
            return {
              ...state,
              isloadingLOGIN: true,
              successLOGIN: false
            };
          case LOGINSUCCESS:
            return {
              ...state,
              isloadingLOGIN: false,
              successLOGIN: true,
              user: action.payload
            };
          case LOGINFAILURE:
            return {
              ...state,
              isloadingLOGIN: false,
              successLOGIN: false,
              user: ""
            };
      
          default:
            return state;
    }
}