<template>
  <div class="grid gap-4 p-4">
    <h1 class="text-2xl font-semibold">Mes Recettes</h1>
    <div class="grid grid-cols-12 gap-2">
      <input type="text" class="bg-gray-200 col-span-10 rounded-lg px-4 flex-shrink-0" placeholder="Recherche">
      <div class="h-12 w-12 bg-gray-200 rounded-lg"></div>
    </div>
    <div class="flex flex-row flex-no-wrap overflow-x-scroll py-3">
      <Badge>🥞 Petit-déjeuner</Badge>
      <Badge active>🥗 Déjeuner</Badge>
      <Badge>🍛 Diner</Badge>
      <Badge>🍦 Déssert</Badge>
    </div>
    <div class="grid gap-y-4">
      <Card
        v-for="recipe in recipes"
        :key="recipe.id"
        :recipe="recipe"
      />
    </div>
    <Add />
  </div>
</template>

<script>
import recipes_query from '~/gql/queries/recipes'
// import categories from '~/gql/queries/categories'

export default {
   apollo: {
      recipes: {
         query: recipes_query,
      },
      // categories: {
      //    query: categories,
      // },
   },
}
</script>

