import { combineReducers } from 'redux';
import {registrationReducer as registration} from './registrationReducer';
import {loginReducer as login} from "./loginReducer";

export default combineReducers({
    registration, login

});