<template>
  <div class="grid grid-cols-1 gap-4 p-4">
    <PageTitle back>Nouvelle recette</PageTitle>

    <RecipeForm v-model="recipe"></RecipeForm>
  
    <ButtonLarge outline @click="submit">
      Enregistrer
    </ButtonLarge>
  </div>
</template>

<script>
import recipes from '~/gql/queries/recipes'
import save_recipe from '~/gql/mutations/save-recipe'

export default {
  data: () => ({
    recipe: {
      title: null,
      categories_id: [],
      difficulty: "recipes.difficulty.normal",
      done: true,
      preparation_time: null,
      rest_time: null,
      baking_time: null,
      servings: 2,
      ingredients: null,
      utensils: null,
      preparation_steps: [""],
      notes: null,
    },
  }),
  methods: {
    async submit() {
      const result = await this.$apollo.mutate({
        mutation: save_recipe,
        variables: {
            recipe: this.recipe,
        },
        update: (store, { data: { saveRecipe } }) => {
            // Read data from cache
            const data = store.readQuery({ query: recipes })
            // Add idea from the mutation to the end
            data.recipes.push(saveRecipe)
            // Write data back to the cache.
            store.writeQuery({ query: recipes, data })
        },
      }).catch(console.error)

      if (result?.data?.saveRecipe) return this.$router.push('/')
    }
  },
}
</script>
