import { post} from 'utils/http';

export const loginapi = params => {
    return post('/devapi/login_login', params);
};