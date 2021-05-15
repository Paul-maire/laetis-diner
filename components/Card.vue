<template>
  <div class="shadow-xl bg-white rounded-lg p-3 flex flex-no-wrap">
    <img
      src="https://source.unsplash.com/random/300x300/?food,dinner"
      alt=""
      class="w-20 h-20 rounded-lg bg-gray-200"
    >
    <div class="w-full pl-4">
      <h2 class="font-bold">{{ recipe.title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
    }
  }
}
</script>
