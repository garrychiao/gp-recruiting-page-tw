import Vue from 'vue';
import Home from '../views/Home.vue';
import Admin from '../views/Admin.vue';
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin
        },
    ],
});

export default router