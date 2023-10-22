import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import VueGtm from '@gtm-support/vue2-gtm';
import VueAnalytics, {onAnalyticsReady} from "vue-analytics";

Vue.use(VueGtm, {
    id: 'GTM-TVPVJXX2',
    vueRouter: router
})

Vue.use(VueAnalytics, {
    id: 'G-ETZZN3KER8'
})

const vueInstance = new Vue({
    router,
    store,
    render: h => h(App)
});
onAnalyticsReady().then(() => {
    vueInstance.$mount('#app');
})


// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', function () {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set Menu State
        showMenu = false;
    }
});