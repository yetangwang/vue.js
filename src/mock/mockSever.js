//webpack默认暴露 图片 json数据
import Mock  from "mockjs";
import banner from "./banner.json"
import floor from "./floor.json"

//mock第一个参数请求地址 第二个参数请求数据
Mock.mock("/mock/banner",{code:200,data:banner})
Mock.mock("/mock/floor",{code:200,data:floor})
