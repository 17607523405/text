<template>
  <div class="about">
      <button @click="btintoast">调用全局model函数</button>
      <div class="zy" @click="btnclick">

      </div>
    </div>
</template>

<script>

  export default {
    name: 'About',
    components: {

    },
    data(){
      return{
        isShow:false
      }
    },
    methods:{
      btintoast(){
        this.$toast.show('标题','tttt');
      },
      btnclick(){
        this.isShow= false
       this.$toast.show('标题','tttt',this.isShow)
      },

    }
  }
</script>

<style>
  .zy{

    width: 300px;
    height: 300px;
    background-color: gray;
    margin: 0 auto;
  }
</style>
