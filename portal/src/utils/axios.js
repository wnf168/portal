import axios from 'axios';
import Vue from 'vue'
import qs from 'qs';
import { Loading } from 'element-ui';
let loading        //定义loading变量
function startLoading() {    //使用Element loading-start 方法
    loading = Loading.service({
        lock: true,
        text: '正在加载中...',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}
function endLoading() {    //使用Element loading-close 方法
    loading.close()
}
let needLoadingRequestCount = 0
export function showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
        startLoading()
    }
    needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) return
    needLoadingRequestCount--
    if (needLoadingRequestCount === 0) {
        endLoading()
    }
}
axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});
// console.log("process.env.VUE_APP_BASE_API"+process.env.VUE_APP_BASE_API)
axios.defaults.baseURL = process.env.VUE_APP_BASE_API;

axios.interceptors.request.use(config => {

    // var token = ''
    //     if(typeof Cookies.get('user') === 'undefined'){
    //         //此时为空
    //     }else {
    //         token = JSON.parse(Cookies.get('user')).token
    //     }//注意使用的时候需要引入cookie方法，推荐js-cookie
    //     config.data = JSON.stringify(config.data);
    //     config.headers = {
    //         'Content-Type':'application/json'
    //     }
    //     if(token != ''){
    //       config.headers.token = token;
    //     }
        showFullScreenLoading();
 
    config.method === 'post'
        ? config.data = qs.stringify({...config.data})
        : config.params = {...config.params};
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      
    return config;
}, error => {  //请求错误处理
    setTimeout(() => {
        Vue.$vux.loading.hide();
        Vue.$vux.toast.text('加载超时', 'middle')
     },3000)
    Promise.reject(error)
});

axios.interceptors.response.use(
    response  => {
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
    //当返回信息为未登录或者登录失效的时候重定向为登录页面
    // if(response.data.code == 'W_100004' || response.data.message == '用户未登录或登录超时，请登录！'){
    //     router.push({
    //         path:"/",
    //         querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
    //     })
    // }
    tryHideFullScreenLoading()
    return response ;
  }, 
  error => {
    setTimeout(() => {
        Vue.$vux.loading.hide()
        Vue.$vux.toast.text('请求失败', 'middle')
      },1000)
  return Promise.reject(error);
});

export default axios; //暴露axios实例