// import axios from 'axios';
// export const FETCH_MISSION = 'fetch_mission';

// export const fetchMission = () => async dispatch => {
//     const res = await axios.get('https://api.spacexdata.com/v3/launches?limit=100');

//     dispatch({
//         type: FETCH_MISSION,
//         payload: res
//     });
// }

import * as actionTypes from './spacex/actionTypes';
import { getLaunchListCall } from '../services/launches/launches.service';

export const fetchMission = (page, filters) => dispatch => {
  dispatch({ type: actionTypes.LAUNCHES_INIT });
  getLaunchListCall(page, filters)
    .then(data => {
      dispatch({ type: actionTypes.LAUNCHES_GET_SUCCESS, payload: data });
    })
    .catch(() => {
      dispatch({
        type: actionTypes.LAUNCHES_GET_FAILURE,
        payload: 'Error',
      });
    });
};
  


export default { fetchMission };
