<script setup>

import { reactive, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { api } from '@/common/utils';

import MovieMetrics from '@/components/MovieMetrics.vue';

const movies = reactive([]);
api('list').then(data => movies.splice(0, 0, ...data.items));

const activeMovie = ref();

const list = ref();
const items = ref();

</script>

<template>
    <ul ref="list" 
        class="grid gap-[16px] my-[32px]" 
        :class=" activeMovie ? 'bar-view' : 'grid-view' "
        style="grid-template-columns: repeat(auto-fit, minmax(296px, 1fr))"
        >
        <li ref="items" v-for="movie of movies"
            class="
                transition-all ease-in-out duration-300
                bg-[#292D32] rounded-[16px] overflow-hidden
                hover:shadow-[8px_8px_0_var(--color-purple)]
                active:hover:shadow-[0_0_3px_3px_var(--color-purple)]
                relative 
                    left-0 top-0 
                    hover:left-[-8px] hover:top-[-8px]
                    active:left-0 active:top-0
            "
            :class="{active:movie === activeMovie}">
            <RouterLink :to="{name: 'movie-details', params: {id: movie.id}}"
                class="block relative h-full p-[12px]">
                <img :src="movie.poster" class="rounded-[var(--poster-radius)] h-[172px] w-full object-cover mb-[12px]" />
                <h2 
                    :title="movie.name"
                    class="
                        h-[var(--line-height-h1)] 
                        mb-[4px] 
                        whitespace-nowrap 
                        overflow-hidden
                        overflow-ellipsis
                    ">{{ movie.name }}</h2>
                <p class="h-[calc(var(--line-height)*2)] overflow-hidden mb-[12px]">{{ movie.description }}</p>
                <MovieMetrics :movie="movie" />
            </RouterLink>
        </li>
    </ul>
</template>

<style scoped>
p {
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
}
</style>