import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  ADD_RECIPE_START,
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_FAILURE,
  DELETE_RECIPE_START,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_FAILURE,
  EDIT_RECIPE_START,
  EDIT_RECIPE_SUCCESS,
  EDIT_RECIPE_FAILURE,
} from '../actions';

const initialState = {
  error: '',
  fetchingData: false,
  chefData: [],
};

export const chefPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        error: '',
        fetchingData: true
        
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingData: false,
        chefData: action.payload
        
      };
    case FETCH_DATA_FAILURE:
        return {
            ...state,
            error: action.payload,
            fetchingData: false
        }
     case ADD_RECIPE_START:
      return {
        ...state,
        error: '',
        fetchingData: true
        
      };
    case ADD_RECIPE_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingData: false,
        chefData: action.payload
        
      };
    case ADD_RECIPE_FAILURE:
        return {
            ...state,
            error: action.payload,
            fetchingData: false
        }
     case DELETE_RECIPE_START:
      return {
        ...state,
        error: '',
        fetchingData: true
        
      };
    case DELETE_RECIPE_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingData: false,
        chefData: action.payload
        
      };
    case DELETE_RECIPE_FAILURE:
        return {
            ...state,
            error: action.payload,
            fetchingData: false
        }
    case EDIT_RECIPE_START:
      return {
        ...state,
        error: '',
        fetchingData: true
        
      };
    case EDIT_RECIPE_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingData: false,
        chefData: action.payload
        
      };
    case EDIT_RECIPE_FAILURE:
        return {
            ...state,
            error: action.payload,
            fetchingData: false
        }
    
    default:
        return state 
  }

}