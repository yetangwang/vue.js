import Vue from 'vue'
import App from './App.vue'
//引入仓库进行注册
import store from './store'
//三级联动组件 --全局组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)

//
import {reqCategoryList} from './api'
reqCategoryList();
import {reqGetSearchInfo} from '@/api'
reqGetSearchInfo({})
//引入路由
import router from '@/router'
//引入mockjs数据
import "@/mock/mockSever"

import "swiper/swiper-bundle.css"

import Pagination from '@/components/Pagination'
Vue.component(Pagination.name,Pagination)
//关闭生产提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this;
  },
  //注册路由信息 当运行后包含有$router,$route属性
  router,
  //$route:可以获取路由上的信息（path，query，params）
  //$router:可以进行编程式导航路由跳转 push||replace
  //注册仓库 组件实例身上会包含一个$store属性
  store,
  
}).$mount('#app')
