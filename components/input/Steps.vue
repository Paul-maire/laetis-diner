<template>
    <div>
        <InputLabel v-if="label" :required="required">{{ label }}</InputLabel>

        <label v-for="(step, index) in value" :key="index" class="flex flex-col mb-2">
            <InputLabel>{{ step_prefix }} {{ index + 1 }}</InputLabel>
            <InputArea v-model="value[index]" />
        </label>

        <button class="text-sm font-poppins font-semibold flex items-center focus:outline-none mb-2" @click="addStep">
            <i class="eva eva-plus mr-1"/>
            Ajouter une étape
        </button>
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
