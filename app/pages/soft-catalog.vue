<script setup>
import fileTree from '../../public/soft-tree.json'
const items = ref(fileTree)
const handleNodeSelect = (node) => {
  if (node.value === undefined) {return;}
  window.open(node.value);
};
</script>
<template>
  <UContainer class="max-w-192">
    <UCard>
        <template #header>
            Softpack for malyutki
        </template>
        <UTree :items="items" @update:model-value="handleNodeSelect"></UTree>
    </UCard>
  </UContainer>
</template>