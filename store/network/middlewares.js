import { omit } from 'lodash';
import { SET_TIMEOUT } from './actions';

// Timeout for requests 15 min
// const timeout = 1000 * 60 * 15;
const timeout = 0;

// Middleware for request timing outs
export const caching = store => next => action => {
    const { network } = store.getState();
    const { request } = action.payload;
    const isRequest = !!request;

    // In case success request to server - set last updated time
    if ( action[ '@@redux-saga/SAGA_ACTION' ] == true && action.error !== true ) {
        next({
            type: SET_TIMEOUT,
            payload: {
                actionType: action.meta.requestAction.type,
                updatedAt: Date.now()
            }
        });
    }

    // Prevent requests with not exceed timeout
    if ( !!isRequest ) {
        if ( network.timeouts[ action.type ] ) {
            const diff = Date.now() - network.timeouts[ action.type ];
            if ( diff !== null && diff < timeout ) {
                return;
            }
        }
    }

    next(action);
};