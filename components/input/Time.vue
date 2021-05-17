<template>
    <label class="flex flex-col">
        <InputLabel v-if="label" :required="required">{{ label }}</InputLabel>
        <input
            @input="$emit('input', $event.target.value)"
            :value="value"
            type="number"
        />
    </label>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
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
    @apply rounded-xl bg-grey border border-transparent outline-none;
}

input:focus {
    @apply text-right border-dark bg-white outline-none;
}
</style>