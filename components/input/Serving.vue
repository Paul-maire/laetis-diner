<template>
    <label v-if="!inline" class="flex flex-col">
        <InputLabel>Nombre de personne</InputLabel>
        <div class="field">
            <span>{{ value }}</span>
            <div class="flex items-center justify-between">
                <button @click="$emit('input', value + 1)">+</button>
                <button @click="(value > 0) ? $emit('input', value - 1) : null">-</button>
            </div>
        </div>
    </label>
    <div v-else>
        <div class="field">
            <span>Nombre de personne</span>
            <div class="flex items-center justify-between">
                <button @click="$emit('input', value + 1)">+</button>
                <span class="ml-4 font-bold">{{ value }}</span>
                <button @click="(value > 0) ? $emit('input', value - 1) : null">-</button>
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
    } 
}
</script>

<style scoped>
.field {
  @apply rounded-xl bg-grey border border-transparent outline-none flex flex-row justify-between items-center px-3 py-1;
}

.field:focus {
  @apply border-dark bg-white outline-none;
}

button {
    @apply bg-white text-xl rounded-lg ml-4 px-3 py-1 flex items-center justify-center relative flex-shrink-0 outline-none;
}

button:focus {
    @apply outline-none;
}
</style>