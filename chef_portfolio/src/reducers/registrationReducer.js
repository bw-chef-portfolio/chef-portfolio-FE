import {
  REGISTRATION_START,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
} from '../actions';

const initialState = {
  error: '',
  registration: false
};

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_START:
      return {
        ...state,
        error: '',
        registration: true,
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        error: '',
        registration: false,
      };
    case REGISTRATION_FAILURE:
        return {
            ...state,
            error: action.payload,
            registration: false
        }
    default:
        return state 
  }

}
