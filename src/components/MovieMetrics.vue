<script setup>

import Icon from './Icon.vue';

defineProps(['movie']);

</script>

<template>
    <ul class="flex gap-[8px]">
        <li :class=" movie.rating >= 7 ? 'bg-green' : movie.rating >= 4 ? 'bg-purple' : 'bg-red' ">
            <Icon icon="star" />{{ movie.rating.toFixed(1) }}
        </li>
        <li class="bg-blue">
            <Icon icon="movie" /><span class="first-letter:uppercase">{{ movie.genre }}</span>
        </li>
        <li class="bg-purple">
            <Icon icon="clock" />{{ movie.duration }}
        </li>
    </ul>
</template>

<style scoped>

li { @apply 
    
    inline-block
    relative 
    rounded-full 
    h-[13px]
    whitespace-nowrap 
    pl-[16px]
    pr-[6px]
    leading-[13px]
    text-[11px]
    font-medium
    ;

    :deep(svg) { @apply
        absolute
        top-[50%]
        left-[6px]
        mt-[-4px];
    }
    
    > * {  @apply
        inline-block
        align-middle
    }

}

</style>