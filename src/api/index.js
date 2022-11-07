//API进行统一管理

import requests from "./request";
import mockRequests from "./mockAjax"
export const reqCategoryList =()=>{
    //发请求 
   return requests({url:'/product/getBaseCategoryList',methon:'get'})
}

export const reqBanner =()=>{
    //发请求 
   return mockRequests({url:'/banner',methon:'get'})
}

export const reqFloor =()=>{
    //发请求 
   return mockRequests({url:'/floor',methon:'get'})
}

export const reqGetSearchInfo = (params) => {
    return requests({
      url: '/list',
      method: 'POST',
      data: params
    })
  }

