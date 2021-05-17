<template>
    <label class="flex flex-col">
        <InputLabel v-if="label" :required="required">{{ label }}</InputLabel>
        <div contenteditable="true" @input="$emit('input', $event.target.outerText)" v-once v-html="value" />
    </label>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: null
        },
        label: {
            type: String,
            default: null
        },
        required: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
div {
  @apply rounded-lg bg-neutral-light border border-transparent outline-none px-3 py-2 min-h-area;
}

div:focus {
  @apply border-neutral-darker bg-neutral-white outline-none;
}
</style>