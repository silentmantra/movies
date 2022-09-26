<script setup>

import { RouterView, RouterLink, useRouter } from 'vue-router'

const router = useRouter();

const DURATION = 350;

router.beforeEach(async (to, from) => {

    // we need a fade out fx before we show a new page
    // so standard vue transition cannot help afaik
    const transitioned = document.querySelectorAll('main, footer');

    if (!transitioned[0].children.length) {
        return;
    }

    const transition = val => transitioned.forEach(elem => elem.style.opacity = val);

    transition(0);

    await new Promise(resolve => setTimeout(resolve, DURATION));

    transition(1);

});

</script>

<template>
    <header class="fixed top-0 left-0 w-full leading-[var(--header-height)] h-[var(--header-height)]">
        <h1 class="inline-block align-middle">
            <RouterLink to="/">Test Task</RouterLink>
        </h1>
    </header>
    <main class="pt-[var(--header-height)] px-[var(--page-padding-x)] relative">
        <RouterView />
    </main>
    <footer
        class="sticky py-[38px] sm:py-0 sm:h-[var(--header-height)] sm:flex sm:leading-[var(--header-height)]">
        <h3 class="mb-[.5em] sm:mb-0 text-[18px] font-bold">Test Task, 2022</h3>
        <address class="sm:flex-grow sm:text-right">
            <div class="inline-block leading-normal text-left not-italic align-middle">
                <a href="tel:518-363-2171">518-363-2171</a><br />
                91 Park St. Fairhope, AL 36532
            </div>
        </address>
    </footer>
</template>

<style scoped>

main, footer { 
    @apply
    transition-opacity opacity-100;
    transition-duration: v-bind('DURATION + "ms"')
}

header, footer { @apply
    z-10
    bg-[#292D32] 
    px-[var(--page-padding-x)] 
    shadow-[0_0_42px_rgba(0,0,0,1)]
    ;
    
}

</style>