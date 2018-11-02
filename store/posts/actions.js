import { endpoints } from '../../mock-config';

export const FETCH_POSTS = 'FETCH_POSTS';
export const fetchPosts = () => ({
    type: FETCH_POSTS,
    payload: {
        request: {
            method: 'GET',
            url: endpoints.posts
        }
    }
});