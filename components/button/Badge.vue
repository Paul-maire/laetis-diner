<template>
  <button
    class="whitespace-nowrap rounded-full text-xs font-semibold mr-3 px-4 py-1 outline-none focus:outline-none w-fit"
    :class="{
      'bg-primary shadow-primary text-white': active,
      'bg-primary-light text-primary': !active,
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
