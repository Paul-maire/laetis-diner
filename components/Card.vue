<template>
  <div class="shadow-xl bg-white rounded-lg p-3 flex flex-no-wrap relative overflow-hidden">
    <img
      src="https://source.unsplash.com/random/300x300/?food,dinner"
      alt=""
      class="w-20 h-20 rounded-lg bg-gray-200"
    >
    <div class="w-full pl-4 flex flex-col h-full justify-between">
      <h2 class="font-bold">{{ recipe.title }}</h2>
      <RecipeSummary :recipe="recipe" />
    </div>

    <div class="absolute top-0 right-0 bg-neutral-light text-xs text-neutral-mid font-semibold rounded-l-full rounded-tr-lg px-2 flex items-center">
      <i class="eva eva-pause-circle-outline mr-2" />
      Repos
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
