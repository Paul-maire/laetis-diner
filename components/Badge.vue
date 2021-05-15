<template>
  <button
    class="whitespace-no-wrap rounded-full text-xs font-semibold mr-3 px-4 py-1"
    :class="{
      'bg-primary shadow-primary text-white bg-opacity-100': active,
      'bg-primary shadow-none text-primary bg-opacity-25': !active,
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
