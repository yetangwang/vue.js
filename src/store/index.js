import Vue from "vue";
import Vuex from 'vuex';
//需要使用插件一次
Vue.use(Vuex);
//对外暴露Store类的一个实例
// 引入小仓库
import home from "./home";
import login from "./login";
import search from "./search";
export default new Vuex.Store({
    modules:{
        home,
    login,
    search
    },
})
// export default new Vuex.Store({
//     //仓库：存储数据的地方
//     state:{
//     },
//     //修改state的唯一手段
//     mutations:{
//     },
//     //处理action，也可以书写自己的业务逻辑，也可以异步处理
//     actions:{
//     },
//     //计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
//     getters:{}
// })

