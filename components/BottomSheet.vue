<template>
  <vue-bottom-sheet ref="myBottomSheet">
    <component :is="base" v-bind="base_props"/>
  </vue-bottom-sheet>
</template>

<script>
import { mapGetters } from 'vuex'
import  VueBottomSheet from "@webzlodimir/vue-bottom-sheet";

export default {
  components: {
    VueBottomSheet
  },
  methods: {
    open() {
      this.$refs.myBottomSheet.open();
    },
  },
  mounted() {
      this.open()
  },
  computed: {
      ...mapGetters('bottom-sheet', ['base', 'base_props'])
  },
}
</script>

<style scoped>
.overlay {
  @apply fixed z-10 h-screen w-full bg-black opacity-50;
}
.container {
  @apply fixed z-20 bottom-0 w-full bg-white h-screen rounded-t-3xl px-4;
}
.pill-container {
  @apply w-full z-30 py-3;
}
.pill {
  @apply w-12 h-2 rounded-full bg-black opacity-50 mx-auto;
}
</style>