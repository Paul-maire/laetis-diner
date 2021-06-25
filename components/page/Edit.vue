<template>
    <i @click="edit" class="eva eva-edit icon bg-white shadow-md rounded-lg px-1 w-fit h-fit" />
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
        edit() {
            return this.$router.push(`/recipes/${this.id}/edit`)
        }
    }
}
</script>


<style scoped>
.icon {
    @apply text-3xl
}
</style>
