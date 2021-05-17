<template>
    <span class="text-xs mb-1 text-neutral-mid">
        <slot /><sup v-if="required" class="text-neutral-mid">*</sup>
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