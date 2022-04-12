import axios from "axios";

const $http = axios.create({
    baseURL: 'http://41.226.149.126:8083',
    timeout: 100000
});

//请求拦截
$http.interceptors.request.use(
    function (config) {
        //添加token
        //config.headers.token = window.sessionStorage.getItem('token')
        return config;
    },
    function (err) {
        return Promise.reject(err)
    }
)

//响应拦截
$http.interceptors.response.use(
    function (response) {
        return response;
    },
    function (err) {
        return Promise.reject(err)
    }
)

export function gets(params) {
    return $http.get(`/xx`)
}