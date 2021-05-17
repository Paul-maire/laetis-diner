<template>
    <span class="text-xs mb-1">
        <slot /><sup v-if="required">*</sup>
    </span>
</template>

<script>
export default {
    props: {
        required: {
            type: Boolean,
            default: false
        }
    }
}
</script>