<script setup>
import { ref } from 'vue';

const items = ref([
    {
        label: '/home',
        icon: 'tdesign:terminal-rectangle-filled',
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
    <UNavigationMenu :items="items" class="w-full justify-center" />
</template>