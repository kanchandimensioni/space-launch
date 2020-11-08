import { combineReducers } from 'redux';
import missionReducer from './missionReducer'

export default combineReducers({
    mission: missionReducer
});