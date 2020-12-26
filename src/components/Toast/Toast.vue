<template>

    <div class="toast" v-show="isShow">
        <div class="title">{{message}}</div>
        <div class="content">{{content}}</div>
        <div class="footer">
            <button @click="qxclick">取消</button>
            <button @click="action">确定</button>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Toast",
        data(){
            return{
                message:'',
                content:'',
                isShow:false
            }
        },
        methods:{
            show(message='默认文字',content='内容区',isShow=true){
                this.message=message
                this.content=content
                this.isShow=isShow
            },
            qxclick(){
                return new Promise((resolve, reject) =>{
                     resolve('点击了取消')
                }).then((res)=>{
                    console.log(res)
                })
            },
            action(){
               return new Promise((resolve, reject) =>{
                   resolve('点击了确定')
               } ).then((res)=>{
                   console.log(res)
               })
            }
        },

    }
</script>

<style scoped>

    .toast{
        width: 220px;

        height: 220px;
        position: fixed;
        left: 50%;
        top: 50%;

        padding: 8px 10px;
        transform:translate(-50%,-50%);
        background-color: aquamarine;
        color: #f6f6f6;
        z-index: 95;
    }
    .title{
        font-size: 15px;
        text-align: center;
        color: black;
    }
    .content{
        text-align: center;
        height: 150px;
        line-height: 150px;
        font-size: 16px;
        color: black;

    }
    .footer{

        display: flex;
        justify-content: space-around;
    }
    .footer button{
        background-color: #42b983;
        border: #42b983;
    }
</style>
