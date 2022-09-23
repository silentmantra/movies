import { createRouter, createWebHistory } from 'vue-router'
import MovieList from '../views/MovieList.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'movie-list',
            component: MovieList
        },
        {
            path: '/movie/:id(\\d+)',
            name: 'movie-details',
            component: () => import('../views/MovieDetails.vue'),
            props: route => ({ id: parseInt(route.params.id) })
        }
    ]
})

export default router
