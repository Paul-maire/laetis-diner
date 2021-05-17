<template>
  <i @click="back" class="eva eva-chevron-left-outline mr-1 back -ml-2" />
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