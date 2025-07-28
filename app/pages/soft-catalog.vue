<script setup>
import fileTree from '../../public/soft-tree.json'

const treeItems = ref(fileTree)
let srcTreeItems = treeItems.value
const searchValue = ref('')
let foundItems = []

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

const handleSearchInputChange = (event) => {
  let searchVal = searchValue.value.toLowerCase().trim();
  if (searchVal.length <= 0) {return}
  foundItems = [];
  searchItems(searchVal, srcTreeItems);
  treeItems.value = foundItems;
};

let searchItems = (searchVal, items) => {
    items.forEach((i) => {
    let itemVal = i.label.toLowerCase();
    if (itemVal.indexOf(searchVal) >= 0){
      foundItems.push(i);
      return; //same as continue, but in callback function
    }
    if (Object.hasOwn(i, 'children')){
      searchItems(searchVal, i.children);
    }
  });
};
</script>
<template>
  <UContainer class="max-w-192">
    <UCard>
        <template #header>
          <div class="flex gap-3 align-middle items-center">
            <span>Softpack for malyutki</span>
            <UInput v-model="searchValue" placeholder="Search..." @change="handleSearchInputChange"/>
          </div>
        </template>
        <UTree :items="treeItems" @update:model-value="handleNodeSelect"></UTree>
    </UCard>
  </UContainer>
</template>