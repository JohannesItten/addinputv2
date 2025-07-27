<script setup>
const items = ref([
    {
        label: 'composables/',
        children: [
          {
            label: 'useAuth.ts',
            icon: 'i-vscode-icons-file-type-typescript'
          },
          {
            label: 'useUser.ts',
            icon: 'i-vscode-icons-file-type-typescript'
          }
        ]
      },
      ])
</script>
<template>
    <UCard class="min-w-128 mb-5 mt-5">
        <template #header>
            Own softpack
        </template>
        <UTree :items="items"></UTree>
    </UCard>
</template>