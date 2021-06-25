<template>
  <i @click="back" class="eva eva-chevron-left-outline back" />
</template>

<script>
export default {
  methods: {
      back() {
        this.$router.go(-1);
      }
    }
}
</script>

<style scoped>
.back {
  @apply text-3xl;
}
</style>