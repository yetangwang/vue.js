import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
//先保存原来VueRouter原型的一份push
let originPush =VueRouter.prototype.push;

let originReplace =VueRouter.prototype.replace;
//重写push|replace
//第一个参数，告诉原来push方法，你往哪儿跳转（传递哪些参数）
VueRouter.prototype.push =function(location,resolve,reject){
    if(resolve&&reject){
        //call和apply区别 都可以改变this指向
        //call使用逗号隔开传递参数，apply方法执行，传递数组
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace =function(location,resolve,reject){
    if(resolve&&reject){
        //call和apply区别 都可以改变this指向
        //call使用逗号隔开传递参数，apply方法执行，传递数组
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}
//配置路由
export default new VueRouter({
    routes:[
    {
        path:"/home",
        component:Home,
        meta:{show:true}
    },
    {
        path:"/Login",
        component:Login,
        meta:{show:false}
    },
    {
        path:"/Register",
        component:Register,
        meta:{show:false}
    },
    {
        path:"/Search/:keyword",
        component:Search,
        meta:{show:true},
        name:"Search"
    },
    {
        path:"*",
        redirect:"/home"
    },

]
})