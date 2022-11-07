import { reqGetSearchInfo } from "@/api";

const state={
    searcList:{}
};
const mutations={
    GETSEARCHLIST(state,searcList){
        state.searcList =searcList
    }
};
const actions={
    async getSearchList({commit},params={}){
        let result=await reqGetSearchInfo(params)
        if(result.code==200){
            commit('GETSEARCHLIST',result.data)
        }
    }
};
const getters={
    goodsList(state){
        return state.searcList.goodsList
    },
    attrsList(state){
        return state.searcList.attrsList
    },
    trademarkList(state){
        return state.searcList.trademarkList
    },
};

export default {
    state,
    mutations,
    actions,
    getters
}