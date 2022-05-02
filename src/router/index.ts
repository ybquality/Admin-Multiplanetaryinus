// 路由
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
        children:[
            {path:"",component:() => import("../views/index.vue")},
            {path:"/userinfo",component:() => import("../views/Userinfo.vue")},
        ]
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("../views/Register.vue")
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue")
    },
    {
        path: "/:catchAll(.*)",
        name: "404",
        component: () => import("../views/404.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),//去除/#/
    routes
})

//实现路由守卫
router.beforeEach((to,from,next) => {
    const isLogin:Boolean = localStorage.token ? true : false;

    if(to.path === "/login" || to.path === "/register"){
        next()
    }else{
        isLogin ? next() : next("/login")
    }
})

export default router