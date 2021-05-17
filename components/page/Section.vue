<template>
    <div>
      <h2 class="font-extrabold text-sm mb-2">{{ title }}</h2>
      
      <slot />
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>