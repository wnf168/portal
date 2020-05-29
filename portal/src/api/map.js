import { post} from 'utils/http';

export const getMapData = params => {
    return post('/devapi/listSiteState', params);
};