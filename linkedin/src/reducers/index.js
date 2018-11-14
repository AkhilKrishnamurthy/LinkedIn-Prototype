import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
    Login: LoginReducer,
    form: formReducer

});


export default rootReducer;