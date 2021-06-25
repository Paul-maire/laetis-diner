<template>
  <div class="grid grid-cols-1 gap-4 p-4" v-if="recipe">
    
    <div class="flex flex-row justify-between">
        <PageTitle back>Modifier la recette</PageTitle>
        <PageDelete :id="id" @click.native="toggle"/>
    </div>

    <RecipeForm v-model="recipe"></RecipeForm>
  
    <ButtonLarge outline @click="submit">
      Enregistrer
    </ButtonLarge>
  </div>
</template>

<script>
// import save_recipe from '~/gql/mutations/save-recipe'
import recipe_query from '~/gql/queries/recipe'
import { mapMutations } from 'vuex'

export default {
    asyncData(context){
        return {
            id: Number(context.params.id),
        }
    },
    apollo: {
        recipe: {
            query: recipe_query,
            variables() {
                return {
                    id: this.id,
                }
            },
        }
    },
    beforeMount() {
        this.base('recipe/Delete')
    },
    methods: {
        async submit() {
            // const result = await this.$apollo.mutate({
            //     mutation: edit_recipe,
            //     variables: {
            //         recipe: this.recipe,
            //     },
            //     // update: (store, { data: { saveIdea } }) => {
            //     //     // Read data from cache
            //     //     const data = store.readQuery({ query: Ideas })
            //     //     // Add idea from the mutation to the end
            //     //     data.ideas.push(saveIdea)
            //     //     // Write data back to the cache.
            //     //     store.writeQuery({ query: Ideas, data })
            //     // },
            // }).catch(console.error)

            // if (result?.data?.editRecipe) return this.$router.go(-1)
        },
        selectCategory(id) {
            if(this.recipe.categories_id.includes(id)) {
                const index = this.recipe.categories_id.findIndex(v => v == id)
                this.recipe.categories_id.splice(index, 1)
            } else {
                this.recipe.categories_id.push(id)
            }
        },
        ...mapMutations('bottom-sheet', ['base', 'base_props', 'toggle']),
    }
}
</script>
