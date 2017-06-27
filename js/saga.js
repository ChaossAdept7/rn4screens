/**
 * Created by serj on 6/25/17.
 */
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants'
import { put, takeEvery } from 'redux-saga/effects'
import getData from './api'

/*When we call put, redux saga instructs the middleware to dispatch an action*/
function* fetchData (action) {
    try {
        const data = yield getData();
        yield put({ type: FETCHING_DATA_SUCCESS, data })
    } catch (e) {
        yield put({ type: FETCHING_DATA_FAILURE })
    }
}
/*takeEvery will listen for dispatched action (in our case FETCHING_DATA) and call a callback function*/
function* dataSaga () {
    yield takeEvery(FETCHING_DATA, fetchData)
}

export default dataSaga