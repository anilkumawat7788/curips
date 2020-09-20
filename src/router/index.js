import Vue from 'vue'
import Router from 'vue-router'
import home from "@/components/pages/home.vue"
import about from "@/components/pages/about.vue"
import services from "@/components/pages/services.vue"
import project from "@/components/pages/project.vue"
import keyteam from "@/components/pages/keyteam.vue"
import contact from "@/components/pages/contact.vue"
import fournotfour from "@/components/pages/fournotfour.vue"
Vue.use(Router)
export default new Router({
    mode:"history",
    routes:[
        {
            path: '/',
            name:'home',
            component:home
        },
        {
            path:"/about",
            name:'about',
            component:about
        },
        {
            path:"/services",
            name:'services',
            component:services
        },
        {
            path:"/project",
            name:'project',
            component:project
        },
        {
            path:"/keyteam",
            name:'keyteam',
            component:keyteam
        },
        {
            path:"/contact",
            name:'contact',
            component:contact
        },
        {
            path:"*",
            name:'404',
            component:fournotfour
        }
    ]
})