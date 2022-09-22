<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
    <header class="top-0 w-full fixed bg-[#292D32] h-[100px] leading-[100px] px-[48px]">
        <h1 class="text-white text-[32px]">Test Task</h1>
    </header>
    <main class="my-[100px] mx-[30px]">
        <RouterView />
    </main>
</template>