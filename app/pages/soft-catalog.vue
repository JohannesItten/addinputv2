<script setup>
import fileTree from '../../public/soft-tree.json'
const items = ref(fileTree)

let downloadFile = (url, filename) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const handleNodeSelect = (node) => {
  if (node === undefined || !Object.hasOwn(node,'value')) {return}
  downloadFile(node.value, node.filename);
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