<template>
  <div class="grid grid-cols-1 gap-4 p-4">
    <div class="flex items-center">
      <span class="font-bold mr-4"> ← </span> <h1 class="text-2xl font-semibold">Nouvelle recette</h1>
    </div>

    <!-- Titre -->
    <label class="flex flex-col">
      <span class="text-xs">Titre de la recette <sup>*</sup></span>
      <input
        v-model="recipe.title"
        type="text"
        class="field"
      />
    </label>

    <!-- Photos -->
    <label class="flex flex-col">
      <span class="text-xs">Photos</span>
      <div class="flex">
        <div class="h-12 w-12 bg-grey rounded-xl mr-4"></div>
        <div class="h-12 w-12 bg-grey rounded-xl flex justify-center items-center text-2xl">+</div>
      </div>
    </label>

    <!-- Catégories -->
    <label class="flex flex-col">
      <span class="text-xs">Catégories</span>
      <div class="flex flex-row flex-wrap">
        <Badge class="mb-2">🥞 Petit-déjeuner</Badge>
        <Badge class="mb-2" active>🥗 Déjeuner</Badge>
        <Badge class="mb-2">🍛 Diner</Badge>
        <Badge class="mb-2">🍦 Déssert</Badge>
        <button class="h-6 w-6 bg-grey rounded-md flex items-center justify-center">+</button>
      </div>
    </label>
    <hr>
    <!-- Difficulté -->
    <div>
      <span class="text-xs">Difficulté</span>
      <div class="grid grid-cols-3 gap-4">
        <label
          class="btn"
          :class="{'btn-selected': is_easy}"
        >
          <input type="radio" class="hidden" v-model="recipe.difficulty" name="difficulty" value="recipes.difficulty.easy">
          Facile
        </label>
        <label
          class="btn"
          :class="{'btn-selected': is_normal}"
        >
          <input type="radio" class="hidden" v-model="recipe.difficulty" name="difficulty" value="recipes.difficulty.normal">
          Moyen
        </label>
        <label
          class="btn"
          :class="{'btn-selected': is_expert}"
        >
          <input type="radio" class="hidden" v-model="recipe.difficulty" name="difficulty" value="recipes.difficulty.difficult">
          Difficile
        </label>
      </div>
    </div>

    <div>
      <span class="text-xs">Réalisation</span>
      <div class="grid grid-cols-3 gap-4">
        <label
          class="btn"
          :class="{'btn-selected': recipe.done}"
        >
          <input type="radio" class="hidden" v-model="recipe.done" name="done" :value="true">
          Déjà fait
        </label>
        <label
          class="btn"
          :class="{'btn-selected': !recipe.done}"
        >
          <input type="radio" class="hidden" v-model="recipe.done" name="done" :value="false">
          A faire
        </label>
      </div>
    </div>
    <hr>
    <!-- Temps de préparation -->
    <label class="flex flex-col">
      <span class="text-xs">Temps de préparation</span>
      <input
        v-model.number="recipe.preparation_time"
        type="number"
        class="field time"
      />
    </label>
    <!-- Temps de cuisson -->
    <label class="flex flex-col">
      <span class="text-xs">Temps de cuisson</span>
      <input
        v-model.number="recipe.baking_time"
        type="number"
        class="field time"
      />
    </label>
    <!-- Temps de repos -->
    <label class="flex flex-col">
      <span class="text-xs">Temps de repos</span>
      <input
        v-model.number="recipe.rest_time"
        type="number"
        class="field time"
      />
    </label>

    <div class="flex text-xs">
      Temps total : <span class="font-bold ml-1">{{ total | time }}</span> <span v-if="recipe.rest_time" class="ml-2">(+ {{ recipe.rest_time | time }} de repos)</span>
    </div>
    <hr>
    <!-- Nombre de personne -->
    <label class="flex flex-col">
      <span class="text-xs">Nombre de personne</span>
      <input
        v-model.number="recipe.servings"
        type="number"
        class="field"
      />
    </label>
    <!-- Ingredients -->
    <label class="flex flex-col">
      <span class="text-xs">Ingredients</span>
      <textarea
        v-model="recipe.ingredients"
        class="field"
      />
    </label>
    <!-- Ustensiles -->
    <label class="flex flex-col">
      <span class="text-xs">Ustensiles</span>
      <textarea
        v-model="recipe.utensils"
        class="field"
      />
    </label>
    <hr>

    <!-- Préparation -->
     <span class="text-xs">Préparation</span>


    <label v-for="(step, index) in recipe.preparation_steps" :key="index" class="flex flex-col">
      <span class="text-xs font-bold">Étape {{ index + 1 }}</span>
      <textarea
        name="first_step"
        v-model="recipe.preparation_steps[index]"
        class="field"
      />
    </label>

    <label class="flex justify-between items-center">
      <span class="text-xs font-bold">Étape {{ recipe.preparation_steps.length + 1 }}</span>
      <button
        class="h-8 w-8 bg-grey rounded-xl flex justify-center items-center"
        @click="addStep"
      >+</button>
    </label>

    <!-- <label class="flex flex-col">
      <span class="text-xs font-bold">Étape 1</span>
      <textarea
        name="first_step"
        v-model="recipe.preparation_steps"
        class="field"
      />
    </label>

    <label class="flex justify-between items-center">
      <span class="text-xs font-bold">Étape 2</span>
      <button class="h-8 w-8 bg-grey rounded-xl flex justify-center items-center">+</button>
    </label> -->

    <hr>
    <!-- Notes -->
    <label class="flex flex-col">
      <span class="text-xs">Notes</span>
      <textarea
        v-model="recipe.notes"
        class="field"
      />
    </label>

    <button
      @click="submit"
      class="rounded-xl bg-primary text-white py-2 text-xs font-bold"
    >Sauvegarder</button>
  </div>
</template>

<script>
import save_recipe from '~/gql/mutations/save-recipe'

export default {
  data: () => ({
    recipe: {
      title: null,
      description: null,
      categories_id: null,
      difficulty: null,
      done: false,
      preparation_time: null,
      rest_time: null,
      baking_time: null,
      servings: null,
      ingredients: null,
      utensils: null,
      preparation_steps: [""],
      notes: null,
    }
  }),
  computed: {
    total() {
      return (Number(this.recipe.preparation_time) + Number(this.recipe.baking_time)) || 0
    },
    is_easy() {
      return this.recipe.difficulty == "recipes.difficulty.easy"
    },
    is_normal() {
      return this.recipe.difficulty == "recipes.difficulty.normal"
    },
    is_expert() {
      return this.recipe.difficulty == "recipes.difficulty.difficult"
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
    addStep() {
      const last = this.recipe.preparation_steps[this.recipe.preparation_steps.length - 1]

      if (last)
        this.recipe.preparation_steps.push("")
    }
  },
  filters: {
    time(value) {
      const m = value % 100 != 0 ? `${value % 100} minutes`: ''
      const h = Math.round(value / 100) != 0 ? `${Math.round(value / 100)} heures` : ''
      return `${h} ${m}`
    }
  }
}
</script>

<style scoped>
.field {
  @apply rounded-xl bg-grey border border-transparent outline-none;
}

.field:focus {
  @apply border-dark bg-white outline-none;
}

.field::placeholder {
  @apply text-transparent;
}

.checkbox:checked {
  @apply bg-primary outline-none;
}

.time:focus {
  @apply text-right;
}

.btn {
  @apply bg-grey flex items-center justify-center py-2 rounded-xl transition-all duration-150 text-xs font-semibold shadow-none;
}

.btn-selected {
  @apply bg-primary shadow-primary text-white;
}
</style>

