<script setup>

defineProps(['movie']);

</script>

<template>
    <ul class="flex gap-[8px]">
        <li :class=" movie.rating >= 7 ? 'bg-green' : movie.rating >= 4 ? 'bg-purple' : 'bg-red' ">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3.99999 1.16666L5.02999 3.25333L7.33332 3.59L5.66666 5.21333L6.05999 7.50666L3.99999 6.42333L1.93999 7.50666L2.33332 5.21333L0.666656 3.59L2.96999 3.25333L3.99999 1.16666Z"
                    stroke="white" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            {{ movie.rating.toFixed(1) }}
        </li>
        <li class="bg-blue">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3.99999 1.16666L5.02999 3.25333L7.33332 3.59L5.66666 5.21333L6.05999 7.50666L3.99999 6.42333L1.93999 7.50666L2.33332 5.21333L0.666656 3.59L2.96999 3.25333L3.99999 1.16666Z"
                    stroke="white" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span class="first-letter:uppercase">{{ movie.genre }}</span>
        </li>
        <li class="bg-purple">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3.99999 1.16666L5.02999 3.25333L7.33332 3.59L5.66666 5.21333L6.05999 7.50666L3.99999 6.42333L1.93999 7.50666L2.33332 5.21333L0.666656 3.59L2.96999 3.25333L3.99999 1.16666Z"
                    stroke="white" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            {{ movie.duration }}
        </li>
    </ul>
</template>

<style scoped>

li {

    @apply inline-block rounded-full h-[13px] whitespace-nowrap px-[6px] leading-[13px] text-[11px] font-medium;

    > svg {
        @apply inline-block;
    }
}
</style>