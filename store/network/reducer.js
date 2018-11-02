import { SET_TIMEOUT } from './actions';

const initialState = {
    status: '',
    message: '',
    timeouts: {}
};

export default (state = initialState, action) => {

    // Store requests timeouts
    if ( action.type === SET_TIMEOUT ) {
        return {
            ...state,
            timeouts: { ...state.timeouts, [ action.payload.actionType ]: action.payload.updatedAt }
        };
    }

    // Handle server side errors and offline mode
    if ( action[ '@@redux-saga/SAGA_ACTION' ] === true ) {
        if ( action.error === true ) {
            if ( action.payload.response && action.payload.response.status === 500 ) {
                return { ...state, status: 'offline', message: 'Server side error, please contact to support' };
            } else {
                return { ...state, status: 'offline', message: action.payload.request._response };
            }
        } else {
            return { ...state, state: '', message: '' };
        }
    }

    return state;
}