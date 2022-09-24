<script setup>

defineProps(['icon']);

</script>
<template>

    <svg v-if="icon === 'star'" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M4.00002 0.666668L5.03002 2.75333L7.33335 3.09L5.66669 4.71333L6.06002 7.00667L4.00002 5.92333L1.94002 7.00667L2.33335 4.71333L0.666687 3.09L2.97002 2.75333L4.00002 0.666668Z"
            stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round" />
    </svg>



    <svg v-if="icon === 'movie'" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">

        <path
            d="M6.60669 0.666666H1.39335C0.992027 0.666666 0.666687 0.992006 0.666687 1.39333V6.60667C0.666687 7.00799 0.992027 7.33333 1.39335 7.33333H6.60669C7.00801 7.33333 7.33335 7.00799 7.33335 6.60667V1.39333C7.33335 0.992006 7.00801 0.666666 6.60669 0.666666Z"
            stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M2.33331 0.666666V7.33333" stroke="black" stroke-width="0.666667" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M5.66669 0.666666V7.33333" stroke="black" stroke-width="0.666667" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M0.666687 4H7.33335" stroke="black" stroke-width="0.666667" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M0.666687 2.33333H2.33335" stroke="black" stroke-width="0.666667" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M0.666687 5.66667H2.33335" stroke="black" stroke-width="0.666667" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M5.66669 5.66667H7.33335" stroke="black" stroke-width="0.666667" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M5.66669 2.33333H7.33335" stroke="black" stroke-width="0.666667" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>

    <svg v-if="icon === 'clock'" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M4.00002 7.33333C5.84097 7.33333 7.33335 5.84095 7.33335 4C7.33335 2.15905 5.84097 0.666667 4.00002 0.666667C2.15907 0.666667 0.666687 2.15905 0.666687 4C0.666687 5.84095 2.15907 7.33333 4.00002 7.33333Z"
            stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M4 2V4L5.33333 4.66667" stroke="black" stroke-width="0.666667" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>


</template>

<style scoped>

svg {
    @apply inline-block;

    path {
        stroke: white !important;
    }
}

</style>