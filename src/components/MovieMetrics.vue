<script setup>

import Tag from './Tag.vue';

defineProps(['movie']);

</script>

<template>
    <ul class="flex gap-[8px]">
        <Tag
            :class=" movie.rating >= 7 ? 'bg-green' : movie.rating >= 4 ? 'bg-purple' : 'bg-red' "
            icon="star">
            {{ movie.rating.toFixed(1) }}
        </Tag>
        <Tag
            class="bg-blue"
            icon="movie">
            <span class="first-letter:uppercase">{{ movie.genre }}</span>
        </Tag>
        <Tag
            class="bg-purple"
            icon="clock">
            {{ movie.duration }}
        </Tag>
    </ul>
</template>