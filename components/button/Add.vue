<template>
  <nuxt-link to="/recipes/new" class="btn">
    +
  </nuxt-link>
</template>

<style scoped>
  .btn {
    @apply fixed right-0 w-16 h-16 flex justify-center items-center bg-primary shadow-primary rounded-full text-white text-4xl -ml-10 -mt-10;
    bottom: 1rem;
    right: 1rem;
  }
</style>
