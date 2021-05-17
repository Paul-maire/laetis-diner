<template>
  <div class="grid grid-cols-1 gap-4 p-4">
    <PageTitle back>Nouvelle recette</PageTitle>

    <PageSection title="Informations">
      <InputText
        label="Titre de la recette"
        v-model="recipe.title" 
        required
        class="mb-2"
      />

      <!-- <label class="flex flex-col">
        <span class="text-xs">Photos</span>
        <div class="flex">
          <div class="h-12 w-12 bg-grey rounded-xl mr-4"></div>
          <div class="h-12 w-12 bg-grey rounded-xl flex justify-center items-center text-2xl">+</div>
        </div>
      </label> -->

      <InputLabel>Catégories</InputLabel>
      <div class="flex flex-row flex-no-wrap overflow-x-scroll py-3 -mx-4 px-4">
        <nuxt-link
          class="eva eva-settings-2-outline bg-grey p-1 rounded-lg mr-2"
          to="/categories"
        />
        <ButtonBadge
          v-for="category in categories"
          :key="category.id"
          :active="recipe.categories_id.includes(category.id)"
          @click.native="selectCategory(category.id)"
        >{{ category.name }}</ButtonBadge>
      </div>

    </PageSection>

    <PageSection title="Difficulté">
      <div class="grid grid-cols-3 gap-4">
        <InputChoice
          v-model="recipe.difficulty"
          option="recipes.difficulty.easy"
        >Facile</InputChoice>
        <InputChoice
          v-model="recipe.difficulty"
          option="recipes.difficulty.normal"
        >Moyen</InputChoice>
        <InputChoice
          v-model="recipe.difficulty"
          option="recipes.difficulty.difficult"
        >Difficile</InputChoice>
      </div>
    </PageSection>

    <PageSection title="Réalisation">
      <div class="grid grid-cols-3 gap-4">
        <InputChoice
          v-model="recipe.done"
          :option="true"
        ><i class="eva eva-checkmark-circle-2 mr-1" :class="{'icon-active': recipe.done}" /> Déjà fait</InputChoice>
        <InputChoice
          v-model="recipe.done"
          :option="false"
        ><i class="eva eva-checkmark-circle-2-outline mr-1" :class="{'icon-active': !recipe.done}" /> A faire</InputChoice>
      </div>
    </PageSection>

    <PageSection title="Temps">
      <!-- Temps de préparation -->
      <InputTime
        label="Temps de préparation"
        v-model.number="recipe.preparation_time"
        class="mb-2"
      />

      <!-- Temps de cuisson -->
      <InputTime
        label="Temps de cuisson"
        v-model.number="recipe.baking_time"
        class="mb-2"
      />
      <!-- Temps de repos -->
      <InputTime
        label="Temps de repos"
        v-model.number="recipe.rest_time"
        class="mb-2"
      />

      <InputLabel>
        Temps total : 
          <span class="ml-1 font-poppins font-semibold">{{ total | time }}</span> 
          <span v-if="recipe.rest_time" class="ml-1 font-poppins font-semibold">(+ {{ recipe.rest_time | time }} de repos)</span>
      </InputLabel>

    </PageSection>

    <PageSection title="Portions">
      <InputServing inline v-model.number="recipe.servings"/>
    </PageSection>

    <PageSection title="Nécessaire / Equipement">
      <InputArea
        label="Ingredients"
        v-model="recipe.ingredients"
        class="mb-2"
      />

      <InputArea
        label="Ustensiles"
        v-model="recipe.utensils"
        class="mb-2"
      />
    </PageSection>
    
    <PageSection title="Préparation">
      <InputSteps v-model="recipe.preparation_steps"/>
    </PageSection>
  
    <PageSection title="Informations supplémentaires">
      <InputArea
        label="Notes"
        v-model="recipe.notes"
      />
    </PageSection>
  
    <ButtonLarge outline @click="submit">
      Enregistrer
    </ButtonLarge>
  </div>
</template>

<script>
import save_recipe from '~/gql/mutations/save-recipe'
import categories from '~/gql/queries/categories'

export default {
  apollo: {
    categories: {
      query: categories,
    },
  },
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
  computed: {
    total() {
      return (Number(this.recipe.preparation_time) + Number(this.recipe.baking_time)) || 0
    }
  },
  methods: {
    async submit() {
      const result = await this.$apollo.mutate({
        mutation: save_recipe,
        variables: {
            recipe: this.recipe,
        },
        // update: (store, { data: { saveIdea } }) => {
        //     // Read data from cache
        //     const data = store.readQuery({ query: Ideas })
        //     // Add idea from the mutation to the end
        //     data.ideas.push(saveIdea)
        //     // Write data back to the cache.
        //     store.writeQuery({ query: Ideas, data })
        // },
      }).catch(console.error)

      if (result?.data?.saveRecipe) return this.$router.push('/')
    },
    selectCategory(id) {
      if(this.recipe.categories_id.includes(id)) {
        const index = this.recipe.categories_id.findIndex(v => v == id)
        this.recipe.categories_id.splice(index, 1)
      } else {
        this.recipe.categories_id.push(id)
      }
    },
  },
}
</script>

<style scoped>
.icon-active:before {
  color: white !important;
}
</style>

