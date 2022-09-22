<script setup>

import { reactive, ref, provide } from 'vue';
import { api } from '@/common/utils';
import { RouterLink, onBeforeRouteUpdate } from 'vue-router';

const movies = reactive([]);
api('list').then(data => {
    movies.splice(0, 0, ...data.items)
});

const activeMovie = ref();
provide('movie', activeMovie);

const list = ref();
const items = ref();

onBeforeRouteUpdate(async (to, from) => {

    const parentRect = list.value.getBoundingClientRect();

    window.scrollTop = 0;
    getStyles('grid', parentRect);

    const listClasses = list.value.classList;

    listClasses.replace('grid-view', 'bar-view');

    getStyles('bar', parentRect);

    listClasses.remove('bar-view');

    animateStyles('grid', 'bar');

    async function animateStyles(from, to) {
        applyStyles(from);
        await new Promise(resolve => setTimeout(resolve));
        applyStyles(to);
    }


    function getStyles(name, parentRect) {

        for (let i = 0; i < movies.length; i++) {
            const movie = movies[i];
            movie[name] = getPosition(items.value[i], parentRect)
        }

    }

    function applyStyles(name) {

        for (let i = 0; i < movies.length; i++) {
            const movie = movies[i];
            const style = items.value[i].style;
            style.top = movie[name].top;
            style.left = movie[name].left;
            style.width = movie[name].width;
            style.height = movie[name].heigth;
            style.position = 'absolute';
            items.value[i].querySelector('p').style.height = movie[name].textHeight;
        }
    }

    activeMovie.value = movies.find(movie => movie.id === parseInt(to.params.id));

});

function getPosition(el, parentRect) {
    const rect = el.getBoundingClientRect();

    const textHeight = (el.querySelector('p').getBoundingClientRect().height || 0) + 'px';

    return {
        left: rect.left - parentRect.left + 'px',
        top: rect.top - parentRect.top + 'px',
        width: rect.width + 'px',
        height: rect.height + 'px',
        textHeight
    };
};

</script>

<template>
    <ul ref="list" :class=" activeMovie ? 'bar-view' : 'grid-view' ">
        <li ref="items" v-for="movie of movies"
            :class="{active:movie === activeMovie}">
            <RouterLink :to="{name: 'details', params: {id: movie.id}}" class="block p-[12px]">
                <img :src="movie.poster" class="rounded-[8px] h-[172px] w-full object-cover" />
                <h2>{{ movie.name }}</h2>
                <p>{{ movie.description }}</p>
            </RouterLink>
        </li>
    </ul>
    <RouterView />
</template>

<style scoped>

ul {

    @apply relative;

    > li {
        @apply text-gray-400 transition-all duration-[.3s] ease-in-out;
        @apply bg-gray-800 rounded-[16px] overflow-hidden [&.active]:bg-gray-600;
        &:hover{
            @apply bg-slate-500;
        }
        p{
            @apply overflow-hidden;
        }
    }
}

ul.grid-view {
    
    @apply grid gap-[16px] bg-black p-10;
    grid-template-columns: repeat(auto-fit, minmax(324px, 1fr));

}

ul.bar-view {
    
    @apply flex;

    > li {
        p {
            @apply hidden;
        }
    }
}
</style>
