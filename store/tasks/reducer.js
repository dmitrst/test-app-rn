import { success, error } from 'redux-saga-requests';
import { FETCH_TASKS } from './actions';

const initialState = {
    isError: false,
    isFetching: false,
    errorMessage: null,
    items: []
};

export default (state = initialState, action) => {
    switch ( action.type ) {

        case FETCH_TASKS:
            return { ...state, isFetching: true };

        case success(FETCH_TASKS):
            return { ...state, isFetching: false, isError: false, items: action.payload.data.data };

        case error(FETCH_TASKS):
            return { ...state, isFetching: false, isError: true, errorMessage: action.payload.message };

        default:
            return state;
    }
}