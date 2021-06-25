<template>
    <label class="flex flex-col">
        <InputLabel v-if="label" :required="required">{{ label }}</InputLabel>
        <input type="text" @input="$emit('input', $event.target.value)" :value="value">
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
input {
  @apply rounded-lg bg-neutral-lighter border border-transparent outline-none;
}

input:focus {
  @apply border-neutral-darker bg-neutral-white outline-none ring-transparent;
}
</style>