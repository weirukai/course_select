import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const myRouter = new Router({
    routes: [{
        path: '/',
        redirected: '/login',
    },
        {
            path: '/login',
            component: () => import("../pages/login/login"),
            meta: {
                title: 'login'
            }
        },
        {
            path: '/mainPage',
            component:()=> import("../pages/layoutContainer/LayoutContainer"),
            meta: {
                title: 'mainPage'
            }
        }
    ]
})

myRouter.beforeEach((to, from, next) =>{
    document.querySelector('body').setAttribute('style','margin:0;padding:0;height:100%')
    next()
})
export default myRouter