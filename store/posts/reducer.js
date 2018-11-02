import { success, error } from 'redux-saga-requests';
import { FETCH_POSTS } from './actions';

const initialState = {
    isError: false,
    isFetching: false,
    errorMessage: null,
    items: []
};

export default (state = initialState, action) => {
    switch ( action.type ) {

        case FETCH_POSTS:
            return { ...state, isFetching: true };

        case success(FETCH_POSTS):
            return {
                ...state,
                isFetching: false,
                isError: false,
                items: action.payload.data.data.sort(
                    (current, next) => current.order - next.order
                )
            };

        case error(FETCH_POSTS):
            return { ...state, isFetching: false, isError: true, errorMessage: action.payload.message };

        default:
            return state;
    }
}