import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            children: [
                {
                    path: '/movie/:id(\\d+)',
                    name: 'details',
                    component: () => import('../views/MovieDetails.vue')
                }
            ]
        }
    ]
})

export default router
