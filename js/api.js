/**
 * Created by serj on 6/25/17.
 */

let url = 'https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=react-native&site=stackoverflow';

export default () => {
    return fetch(url).then(
        /* turn blob to json */
        (response)=>(response.json())
    ).catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
    });
}
