import {createRouter, createWebHistory} from 'vue-router';

import Ranking from './pages/Ranking';
import Home from './pages/Home';
import meudrop from './pages/meudrop'

const routes = [
    {
        path:'/',
        name: 'home',
        component: Home
    },
    {
        path:'/ranking',
        name: 'ranking',
        component: Ranking
    },
    {
        path:'/dropdown',
        name:'dropdown',
        component: meudrop
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes:routes
});
export default router;