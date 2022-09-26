<script setup>

import Icon from './Icon.vue';
defineProps(['icon', 'text']);

</script>
<template>
    <li class="
        inline-block
        relative 
        rounded-full 
        h-[24px]
        leading-[24px]
        whitespace-nowrap 
        pl-[22px]
        pr-[10px]
        text-[12px]
        font-medium
        [&>*]:inline-block
        [&>*]:align-middle
    ">
        <Icon class="absolute top-[50%] left-[10px] mt-[-4px]" :icon="icon" />
        <slot></slot>
    </li>
</template>