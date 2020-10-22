import Vue from 'vue'
import Router from 'vue-router'
import LayoutContainer from "@/pages/layoutContainer/LayoutContainer";
import store from "@/store/index";
Vue.use(Router)
const myRouter = new Router({
    routes: [
        {
        path: '',
        redirected: '/login',
        component: () => import("../pages/login/login"),
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
            name:'LayoutContainer',
            meta: {
                title: 'mainPage'
            },
            component:LayoutContainer,
            children:[
                {
                    path: "",
                    redirect:"generalCourse"
                },
                {
                    name:'generalCourse',
                    path:'generalCourse',
                    component:()=>import("../components/generalCourse.vue"),
                    meta:{
                        title:"公共选修课"
                    }
                },
                {
                    name:'PECourse',
                    path:'PECourse',
                    component:()=>import("../components/PECourse"),
                    meta:{
                        title:"体育课选课"
                    }
                },
                {
                    name:'majorCourse',
                    path:'majorCourse',
                    component:()=>import("../components/majorCourse"),
                    meta:{
                        title:"专业选修课"
                    }
                },
                {
                    name:'courseSelected',
                    path:'courseSelected',
                    component:()=>import("../components/courseSelected"),
                    meta:{
                        title:"已选课程"
                    }
                }
            ]
        }
    ]
})

myRouter.beforeEach((to, from, next) =>{
    document.querySelector('body').setAttribute('style','margin:0;padding:0;height:100%')
    if (to.path !== '/login' && !store.state.token) {
        next('/login')
    } else {
        next();
    }
})
export default myRouter