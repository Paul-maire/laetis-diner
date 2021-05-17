<template>
    <span class="text-primary text-xs flex items-center font-semibold">
        <i class="eva eva-clock-outline icon-primary mr-1" />
        {{ preparation_time | time }}
    </span>
</template>

<script>
export default {
    props: {
        preparation_time: {
            type: Number,
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