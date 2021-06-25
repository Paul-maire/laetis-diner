<template>
    <label v-if="!inline" class="flex flex-col">
        <InputLabel>Nombre de personne</InputLabel>
        <div class="field">
            <span>{{ value }}</span>
            <div class="flex items-center justify-between">
                <i class="eva eva-minus-outline btn" @click="minus"/>
                <i class="eva eva-plus-outline btn" @click="plus"/>
            </div>
        </div>
    </label>
    <div v-else>
        <div class="field">
            <span class="text-sm text-neutral-mid">Nombre de personne</span>
            <div class="flex items-center justify-between">
                <i class="eva eva-minus-outline btn" @click="minus" />
                <span class="ml-4 font-bold">{{ value }}</span>
                <i class="eva eva-plus-outline btn" @click="plus"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            default: 1
        },
        inline: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        plus() {
            this.$emit('input', this.value + 1)
        },
        minus() {
            if(this.value > 1) 
                this.$emit('input', this.value - 1)
        }
    }
}
</script>

<style scoped>
.field {
  @apply rounded-lg bg-neutral-lighter border border-transparent flex flex-row justify-between items-center px-3 py-1;
}

.field:focus {
  @apply border-neutral-darker bg-neutral-white;
}

.btn {
    @apply bg-white text-xl rounded-lg ml-4 px-2 py-1;
}
</style>