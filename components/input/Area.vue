<template>
    <label class="flex flex-col">
        <InputLabel v-if="label" :required="required">{{ label }}</InputLabel>
        <div contenteditable="true" @input="$emit('input', $event.target.outerText)" >{{ value }}</div>
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
  @apply rounded-xl bg-grey border border-transparent outline-none px-3 py-2;
}

div:focus {
  @apply border-dark bg-white outline-none;
}
</style>