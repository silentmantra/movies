<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
    <div class="h-[100vh] grid grid-rows-[auto_1fr]">
        <header class="shadow-black shadow-2xl z-10">
            <h1 class="inline-block align-middle">
                <RouterLink to="/">Test Task</RouterLink>
            </h1>
        </header>
        <main class="
            grid
            grid-rows-[1fr_auto]
            overflow-auto
            ">
            <div class="px-[var(--page-padding-x)]">
                <RouterView />
            </div>
            <footer class="flex">
                <h3 class="text-[18px] font-bold">Test Task, 2022</h3>
                <address class="flex-grow text-right">
                    <div class="inline-block leading-normal text-left not-italic align-middle">
                        <a href="tel:518-363-2171">518-363-2171</a><br />
                        91 Park St. Fairhope, AL 36532
                    </div>
                </address>
            </footer>
        </main>
    </div>
</template>

<style scoped>

header, footer { @apply
    bg-[#292D32] 
    h-[100px] 
    leading-[100px] 
    px-[var(--page-padding-x)] 
    ;
}

</style>