/**
 * Created by serj on 6/25/17.
 */
import { combineReducers } from 'redux'
import appData from './dataReducer'

const rootReducer = combineReducers({
    appData
})

export default rootReducer