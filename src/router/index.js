import { createRouter, createWebHistory } from 'vue-router'
import MovieList from '../views/MovieList.vue'

const scrollPos = null;

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from) {

        if (from.name === 'movie-list') {
            scrollPos = document.querySelector('main').scrollTop;
        } else if (to.name === 'movie-list') {
            document.querySelector('main') = scrollPos;
        }

    },
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
