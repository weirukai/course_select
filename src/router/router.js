import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const myRouter=new Router({
    routes:[{
        path:'/',
        redirected:'/login',
    },
        {
            path: '/login',
            component:()=>import("../pages/login/login"),
            meta:{
                title:'login'
            }
        }
    ]
})
export default myRouter