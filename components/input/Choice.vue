<template>
    <button
        :class="{'selected': option == value}"
        @click="$emit('input', option)"
    >
        <slot />
    </button>
</template>

<script>
export default {
    props: ['value', 'option']
}
</script>

<style scoped>
    button {
        @apply bg-grey flex items-center justify-center py-2 rounded-xl transition-all duration-150 text-xs font-semibold outline-none;
    }

    button:focus {
        @apply outline-none;
    }

    .selected {
        @apply bg-primary text-white;
    }
</style>