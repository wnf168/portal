import { post} from 'utils/http';

export const loginapi = params => {
    return post('/api/login_login', params);
};