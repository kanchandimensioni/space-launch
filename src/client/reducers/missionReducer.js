import { FETCH_MISSION } from '../actions';

export default (state= [], action) => {
    switch (action.type) {
        case FETCH_MISSION:
            return action.payload.data;
        default: 
            return state;
    }
};