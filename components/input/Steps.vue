<template>
    <div>
        <InputLabel v-if="label" :required="required">{{ label }}</InputLabel>

        <label v-for="(step, index) in value" :key="index" class="flex flex-col mb-2">
            <InputLabel v-if="label" class="font-bold">{{ step_prefix }} {{ index + 1 }}</InputLabel>
            <InputArea v-model="value[index]" />
        </label>

        <label class="flex justify-between items-center">
            <InputLabel v-if="label" class="font-bold">{{ step_prefix }} {{ value.length + 1 }}</InputLabel>
            <button
                class="h-8 w-8 bg-grey rounded-xl flex justify-center items-center"
                @click="addStep"
            >+</button>
        </label>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: null
        },
        step_prefix: {
            type: String,
            default: "Étape"
        },
        value: {
            type: Array,
            default: () => [""]
        },
        required: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        addStep() {
            const last = this.value[this.value.length - 1]

            if (last)
                this.value.push("")
        },
    }
}
</script>
