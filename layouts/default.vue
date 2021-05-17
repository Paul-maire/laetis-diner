<template>
  <div class="h-screen w-screen md:px-24 lg:px-36 xl:px-60">
    <Nuxt />
    <BottomSheet v-if="show"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('bottom-sheet', ['show'])
  },
}
</script>

<style>
html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  @apply font-open text-base;
}

*,
*::before,
*::after {
  @apply box-border m-0 text-neutral-dark;
}
</style>
