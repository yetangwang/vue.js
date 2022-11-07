//home模块的小仓库
import { reqCategoryList, reqBanner ,reqFloor} from "@/api";
const state = {
    //home仓库中存储的三级菜单中的数据
    categoryList: [],
    //轮播图的数据
    banner: [],
    floor:[]
};
//mutations是唯一可以处理state中数据的地方
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    BannerList(state, banner) {
        state.banner = banner
    },
    FloorList(state,floor){
        state.floor = floor
    }
}
const actions = {
    //actions 处理用户派发的请求，也可以书写异步语句
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    },
    //获取轮播图的数据
    async getBannerList({ commit }) {
        let result = await reqBanner()
        if (result.code == 200) {
            commit("BannerList", result.data)
        }
    },
    async reqFloor({commit}){
        let result =  await reqFloor()
        if (result.code == 200) {
            commit("FloorList", result.data)
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}