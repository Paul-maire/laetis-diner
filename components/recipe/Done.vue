<template>
    <span class="text-xs flex items-center font-semibold">
        <i class="eva eva-checkmark-circle-2 mr-1" />
        {{ done | done }}
    </span>
</template>

<script>
export default {
    props: {
        done: {
            type: Boolean,
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