
import { FETCHING_DATA, LOGIN} from './constants'

/* initiate fetching data */
export function fetchData() {
    return {
        type: FETCHING_DATA
    }
}
/* save username to store  */
export function doLogin(userName){
    return {
        type: LOGIN,
        payload:userName
    }
}