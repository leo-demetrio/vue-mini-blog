import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

import Home from '@/pages/home';
import Videos from '@/pages/videos';
import Sobre from '@/pages/sobre';
import Contato from '@/pages/contato';

const routes = [
    {    
        path: '/',
        component: Home,  
    },
    {    
        path: '/videos',
        component: Videos    
    },
    {    
        path: '/sobre',
        component: Sobre    
    },
    {    
        path: '/contato',
        component: Contato    
    }
];
const router = new VueRouter({
    routes,
    mode: 'history'
});
export default router;