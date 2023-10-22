import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: "Dean Konkolewski | Self-taught Full-stack Developer"
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
            title: "Self-taught Full-stack Developer | Dean Konkolewski"
        }
    },
    {
        path: '/work',
        name: 'Work',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Work.vue'),
        meta: {
            title: "Dean Konkolewski | Work Experience"
        }
    },
    {
        path: '/privacy-policies/cocktail-book',
        name: 'Cocktail Book | Privacy Policy',
        component: () =>
            import ('../views/PrivacyPolicies/CocktailBook.vue'),
        meta: {
            title: "Cocktail Book | Privacy Policy"
        }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Contact.vue'),
        meta: {
            title: "Contact Me"
        }
    }
]

const router = new VueRouter({
    routes,
    options: {
        base: "deancole.info"
    }
})

router.beforeEach((to, from, next) => {
    const title = to.meta.title;
    if (title) {
        document.title = title;
    } else {
        document.title = "Dean Konkolewski | Self-taught Full-stack Developer"
    }
    next()
})

export default router