<template>
    <label class="flex flex-col" @click="focus = true">
        <InputLabel v-if="label" :required="required">{{ label }}</InputLabel>
        <input
            v-if="focus || !value"
            @input="$emit('input', $event.target.value)"
            :value="value"
            class="field"
            type="number"
            pattern="[0-9]*"
            inputmode="numeric"
            @blur="focus = false"
        />
        <div
            v-else
            class="field py-2 px-3"
        >
            {{ value | time("long") }}
        </div>
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
    },
    data: () => ({
        focus: false
    })
}
</script>

<style scoped>
.field {
    @apply rounded-lg bg-neutral-light border border-transparent outline-none;
}

.field:focus {
    @apply text-right border-neutral-darker bg-neutral-white outline-none ring-transparent;
}
</style>