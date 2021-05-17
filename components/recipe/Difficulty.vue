<template>
    <span class="text-primary text-xs flex items-center font-semibold">
        <i class="eva eva-award icon-primary mr-1" />
        {{ difficulty | difficulty}}
    </span>
</template>

<script>
export default {
    props: {
        difficulty: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.icon-primary:before {
  @apply text-primary !important;
}
</style>