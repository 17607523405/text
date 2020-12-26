<template>
    <div id="nav">
<!--        <router-link to="/">Home</router-link>-->
        <router-link to="/about">About ---    </router-link>
        <router-link to="/home">home</router-link>
        <router-view/>
    </div>


</template>

<script>

    export default {
        name: 'App',
        components: {},
        data() {
            return {
                isShow: false
            }
        },
        methods: {}
    }
</script>

<style>

</style>
