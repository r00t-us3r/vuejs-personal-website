import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/work',
        name: 'Work',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Work.vue')
    },
    {
        path: '/privacy-policies/cocktail-book',
        name: 'Cocktail Book | Privacy Policy',
        component: () =>
            import ('../views/PrivacyPolicies/CocktailBook.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Contact.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router