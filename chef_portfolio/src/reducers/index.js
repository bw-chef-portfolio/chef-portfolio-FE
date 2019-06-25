import { combineReducers } from 'redux';
import {registrationReducer as registration} from './registrationReducer';
import {loginReducer as login} from "./loginReducer";
import {cardReducer} from './cardReducer';
import { chefPageReducer } from './chefPageReducer'

export default combineReducers({
    registration, login, cardReducer,chefPageReducer
});