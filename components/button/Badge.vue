<template>
  <button
    class="whitespace-nowrap rounded-full text-xs font-semibold mr-3 px-4 py-1 outline-none focus:outline-none"
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
