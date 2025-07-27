<script setup>
import { ref } from 'vue';

const items = ref([
    {
        label: '/home',
        icon: 'line-md:home-simple-filled',
        to: '/',
    },
    {
        label: '/soft',
        icon: 'tdesign:terminal-rectangle-filled',
        to: '/soft-catalog',
    },
    {
        label: '/win-tools',
        icon: 'qlementine-icons:windows-24',
        to: '/win-tools',
    },
    {
        label: '/memos',
        icon: 'material-symbols:add-notes',
        to: 'https://memos.addinput.ru',
    }
]);
</script>

<template>
    <UContainer class="flex items-center h-16 relative">
        <!-- <div class="sm:visible flex gap-2 absolute text-xl items-center left-0">
            <span>$ ls ~/input-stuff</span>
            <div class="flex animate-pulse bg-emerald-500 w-2 h-5"></div>
        </div> -->
        <div class="mx-auto">
            <UNavigationMenu :items="items" class="grow"/>
        </div>
    </UContainer>
</template>