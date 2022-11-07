//队友axios进行二次封装 为什么需要进行二次封装，请求拦截器，响应拦截器：请求拦截器可以在请求之前处理一些业务，响应拦截器，
//当服务器数据返回以后，可以处理一些事情
import axios from "axios"
//引入进度条
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

//1:利用axios对象的方法create,去创建一个axios实例  
const requests =axios.create({
    //配置对象
    //基础路径，发请求的时候，路径会出现api
    // baseURL:"http://gmall-h5-api.atguigu.cn/api",
    baseURL:"/api",
    //超时请求不超过5秒
    timeout:5000
}) 

//请求拦截器
requests.interceptors.request.use((config)=>{
    //config：配置对象，对象里面有一个属性很重要，headers请求头
    //进度条开始
    nprogress.start()
    return config;
})

//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功返回的回调函数，服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情
    nprogress.done();
    return res.data
},(err)=>{
    //响应失败的回调函数
    return Promise.reject(new Error('faile'))
})
//对外暴露
export default requests;