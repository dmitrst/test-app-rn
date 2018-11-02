import { endpoints } from '../../mock-config';

export const FETCH_TASKS = 'FETCH_TASKS';
export const fetchTasks = () => ({
    type: FETCH_TASKS,
    payload: {
        request: {
            method: 'GET',
            url: endpoints.tasks
        }
    }
});