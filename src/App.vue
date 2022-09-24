<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
    <div id="#app" class="h-[100vh] grid grid-rows-[auto_1fr]">
        <header class="leading-[var(--header-height)] h-[var(--header-height)]">
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
                <router-view v-slot="{ Component }">
                    <transition name="fade">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </div>
            <footer class="py-[38px] sm:py-0 sm:h-[var(--header-height)] sm:flex sm:leading-[var(--header-height)]">
                <h3 class="mb-[.5em] sm:mb-0 text-[18px] font-bold">Test Task, 2022</h3>
                <address class="sm:flex-grow sm:text-right">
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

header, footer { @apply
    z-10
    bg-[#292D32] 
    px-[var(--page-padding-x)] 
    shadow-[0_0_42px_rgba(0,0,0,1)]
    ;
    
}

</style>