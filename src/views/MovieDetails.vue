<script setup>

import { inject } from 'vue';
const movie = inject('movie');

</script>

<template>
    <div class="text-white mt-[30px] mx-auto max-w-[800px]">
        <h1 class="text-2xl mb-[20px]">{{ movie.name }} <RouterLink to="/" class="cursor-pointer hover:underline float-right">CLOSE (X)</RouterLink></h1>
        <div>
            
            <img :src="movie.poster" class="float-left mr-[30px]" />
            <p>{{ movie.description }}</p>
        </div>
    </div>
</template>