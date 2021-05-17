<template>
    <div class="flex items-center">
      <PageBack v-if="back" /> <h1 class="text-2xl font-semibold font-poppins text-neutral-darker"><slot /></h1>
    </div>
</template>

<script>
export default {
    props: {
        back: {
            type: Boolean,
            default: false
        }
    }
}
</script>