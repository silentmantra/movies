<script setup>

import { reactive } from 'vue';
import { api } from '@/common/utils';
import MovieMetrics from '@/components/MovieMetrics.vue';

const props = defineProps(['id']);

const movie = reactive({});

Promise.all([api('list'), api('details')]).then(([{ items: movies }, details]) => {

    const data = movies.find(movie => movie.id === props.id);
    for (const key in details) {
        if (key in data) {
            continue;
        }
        data[key] = details[key];
    }

    Object.assign(movie, data);

});


</script>

<template>
    <div class="
            grid 
            grid-cols-1
            sm:grid-cols-[auto_1fr] 
            sm:gap-[64px]
            [&>*]:py-[24px]
        ">
        <div class="
                sm:sticky 
                sm:top-0 
                sm:h-[calc(100vh_-_200px)] 
                sm:w-[240px]
                flex flex-col gap-[24px]
            ">
            <h1>{{ movie.name }}</h1>
            <img :src="movie.poster" class="w-[240px] rounded-[var(--poster-radius)]" />
            <MovieMetrics :movie="movie" />
        </div>
        <div class="sm:max-w-[340px]">
            <ul class="flex flex-col gap-[16px]">
                <li>
                    <h1>Description</h1>
                    <p>{{ movie.description }}</p>
                </li>
                <li>
                    <h1>Trivia</h1>
                    <ul>
                        <li v-for="item of movie.trivia" :key="item">
                            {{ item }}
                        </li>
                    </ul>
                </li>
                <li>
                    <h1>Actors</h1>
                    <ul>
                        <li v-for="actor of movie.actors" :key="actor.imdb_id">
                            <a class="underline hover:no-underline" target="_blank" :href="`https://www.imdb.com/name/${ actor.imdb_id }/`">{{ actor.name }}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

    </div>
</template>

<style scoped>
    ul h1 { @apply
        mb-[16px]
    }
    ul ul > li { @apply
        list-disc
    }
</style>