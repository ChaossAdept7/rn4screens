/**
 * Created by serj on 6/25/17.
 */

import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, LOGIN} from '../constants'
const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false,
    userName:"John"
};

export default function dataReducer (state = initialState, action) {
    switch (action.type) {
        case FETCHING_DATA:
            return {
                ...state,
                data: [],
                isFetching: true
            }
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data.items,
                dataFetched:true
            }
        case FETCHING_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        case LOGIN:
            return {
                ...state,
                userName: action.payload
            }
        default:
            return state
    }
}