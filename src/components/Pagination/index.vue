<template>
    <div>
        <div class="fr page">
            <div class="sui-pagination clearfix">
                <ul>
                    <li class="prev disabled">
                        <a href="#">«上一页</a>
                    </li>
                    <li class="active">
                        <a href="#">1</a>
                    </li>
                    <li>
                        <a href="#">2</a>
                    </li>
                    <li>
                        <a href="#">3</a>
                    </li>
                    
                    <li>
                        <a href="#">5</a>
                    </li>
                    
                    <li class="dotted"><span>...</span></li>
                    <li>
                        <a href="#">{{totalPage}}</a>
                    </li>
                    <li class="next">
                        <a href="#">下一页»</a>
                    </li>
                    
                </ul>
                <div><span>{{total}}&nbsp;</span></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props:['pageNo', 'pageSize', 'total' ,'continues'],
    computed:{
        totalPage(){
            return Math.ceil(this.total/this.pageSize)
        },
        startNumAndEndNum(){
            let start =0;
            let last=0
            if(countinues>this.totalPage){
                start=1
                end=this.totalPage
            }else{
                start=pageNo- parseInt(continues/2)
                end=pageNo+parseInt(continues/2)
            }
        }
    },
}
</script>

<style lang="less" scoped>

.page {
    width: 733px;
    height: 66px;
    overflow: hidden;
    float: right;

    .sui-pagination {
        margin: 18px 0;

        ul {
            margin-left: 0;
            margin-bottom: 0;
            vertical-align: middle;
            width: 490px;
            float: left;

            li {
                line-height: 18px;
                display: inline-block;

                a {
                    position: relative;
                    float: left;
                    line-height: 18px;
                    text-decoration: none;
                    background-color: #fff;
                    border: 1px solid #e0e9ee;
                    margin-left: -1px;
                    font-size: 14px;
                    padding: 9px 18px;
                    color: #333;
                }

                &.active {
                    a {
                        background-color: #fff;
                        color: #e1251b;
                        border-color: #fff;
                        cursor: default;
                    }
                }

                &.prev {
                    a {
                        background-color: #fafafa;
                    }
                }

                &.disabled {
                    a {
                        color: #999;
                        cursor: default;
                    }
                }

                &.dotted {
                    span {
                        margin-left: -1px;
                        position: relative;
                        float: left;
                        line-height: 18px;
                        text-decoration: none;
                        background-color: #fff;
                        font-size: 14px;
                        border: 0;
                        padding: 9px 18px;
                        color: #333;
                    }
                }

                &.next {
                    a {
                        background-color: #fafafa;
                    }
                }
            }
        }

        div {
            color: #333;
            font-size: 14px;
            float: right;
            width: 241px;
        }
    }
}
</style>