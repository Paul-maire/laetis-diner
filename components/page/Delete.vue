<template>
    <i @click="openBottomSheet" class="eva eva-trash-outline icon bg-neutral-light rounded-lg px-1 w-fit h-fit" />
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    methods: {
        openBottomSheet() {
            // return this.$router.push(`/recipes/${this.id}/edit`)
        }
    }
}
</script>


<style scoped>
.icon {
    @apply text-2xl
}
</style>
