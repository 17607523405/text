import  Vue from 'vue'
import VueRouter from 'vue-router'
const about = () =>import('../views/About');
const home =() =>import('../views/Home')
Vue.use(VueRouter)
const routes=[
    {
        path:'',
        redirect:'about'
    },
    {
        path: '/about',
        component:about
    },
    {
        path:'/home',
        component:home
    }]
const  router=new VueRouter({
    routes,
    mode:'history'
})

export default router