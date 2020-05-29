import axios from 'axios';
import qs from 'qs';

axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});
console.log("process.env.VUE_APP_BASE_API"+process.env.VUE_APP_BASE_API)
axios.defaults.baseURL = process.env.VUE_APP_BASE_API;

axios.interceptors.request.use(config => {
    // Toast.loading({
    //   mask: true,
    //   message: "加载中..."
    // });
    console.log("正在加载中...")
 
    config.method === 'post'
        ? config.data = qs.stringify({...config.data})
        : config.params = {...config.params};
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
 
    return config;
}, error => {  //请求错误处理
    // console.log(error);
    Promise.reject(error)
});

axios.interceptors.response.use(
  res => {
    // let result;
    // switch (res.status) {
    //   case 404:
    //     console.log("404");
    //     break;
    //   case 500:
    //     console.log("服务器出错");
    //     break;
    //   case 401:
    //     console.log("401");
    //     break;
    //   case 200:
    //     let data = res.data;
    //     if (data.respCode === '0000') {
    //       result = data.data;
    //     }else{
    //       console.log("出错了")
    //     }
    //     break;
    // }
    //在这里对返回的数据进行处理
    // return result;
    return res;
  }, 
  error => {
  return Promise.reject(error);
});

export default axios; //暴露axios实例