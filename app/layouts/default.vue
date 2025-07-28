<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <UContainer class="flex-1 flex flex-col">
      <slot />
    </UContainer>
    <AppFooter />
  </div>
</template>