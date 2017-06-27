import { createStore, applyMiddleware } from 'redux'
import app from './reducers'

import createSagaMiddleware from 'redux-saga'
import dataSaga from './saga'

/* creating a middleware using the factory function */
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const store = createStore(app, applyMiddleware(sagaMiddleware));
    /* apply saga */
    sagaMiddleware.run(dataSaga);
    return store
}