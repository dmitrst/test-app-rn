import { endpoints } from '../../mock-config';

export const FETCH_USER = 'FETCH_USER';
export const fetchUser = () => ({
    type: FETCH_USER,
    payload: {
        request: {
            method: 'GET',
            url: endpoints.user
        }
    }
});