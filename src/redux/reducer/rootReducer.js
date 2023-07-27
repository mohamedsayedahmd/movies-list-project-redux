import {combineReducers} from 'redux';
import { MovieReducer } from './movieReducer';
export const rootReducer = combineReducers({
    redMovie:MovieReducer
});