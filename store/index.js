import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { requestsPromiseMiddleware } from 'redux-saga-requests';
import thunkMiddleware from "redux-thunk";

import saga from './saga';

import userReducer from './user/reducer';
import tasksReducer from './tasks/reducer';
import postsReducer from './posts/reducer';
import networkReducer from './network/reducer';

import { caching } from './network/middlewares';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    user: userReducer,
    tasks: tasksReducer,
    posts: postsReducer,
    network: networkReducer
});

const store = createStore(rootReducer, applyMiddleware(
    requestsPromiseMiddleware(),
    caching,
    thunkMiddleware,
    sagaMiddleware
));

sagaMiddleware.run(saga);

export default store;