<template>
    <button
        @click="$emit('click')"
        class="h-10 w-full focus:outline-none text-sm font-bold border rounded-lg"
        :class="{
            'bg-neutral-dark border-neutral-dark text-white': !outline,
            'bg-neutral-white border-neutral-mid text-neutral-mid': outline
        }"
    >
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        outline: {
            type: Boolean,
            default: false
        }
    }
}
</script>