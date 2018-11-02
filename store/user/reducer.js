import { success, error } from 'redux-saga-requests';
import { FETCH_USER } from './actions';

const initialState = {
    isError: false,
    isFetching: false,
    errorMessage: null
};

export default (state = initialState, action) => {
    switch ( action.type ) {

        case FETCH_USER:
            return { ...state, isFetching: true };

        case success(FETCH_USER):
            return { ...state, isFetching: false, isError: false, ...action.payload.data.data };

        case error(FETCH_USER):
            return { ...state, isFetching: false, isError: true, errorMessage: action.payload.message };

        default:
            return state;
    }
}