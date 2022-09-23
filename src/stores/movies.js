import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/common/utils';

export const useMovieStore = defineStore('movies', async () => {

    const movies = reactive([]);((await api('list')).items);

    function getMovie(id) {
        const movie = { ...movies.find(movie => movie.id === id) };
        for (const key in details) {
            if (key in movie) {
                continue;
            }
            movie[key] = details[key];
        }
        return movie;
    }

    return { movies, getMovie };

});
