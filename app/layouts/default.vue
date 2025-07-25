<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <content class="flex-1">
        <slot />       
    </content>
    <AppFooter />
  </div>
</template>