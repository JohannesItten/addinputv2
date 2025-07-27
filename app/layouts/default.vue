<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <content class="flex-1 flex flex-col justify-center items-center">
        <slot />       
    </content>
    <AppFooter />
  </div>
</template>