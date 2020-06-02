import { post,get} from 'utils/http';

//获取起止时间和结束时间
export const timeOnline = params => {
    return get('/devapi/timeOnline', params);
};