<template>
  <div class="grid gap-4 p-4">
    <PageTitle>Mes Recettes</PageTitle>
    <div class="grid grid-cols-12 gap-2">
      <input type="text" class="bg-grey col-span-10 rounded-lg px-4 flex-shrink-0 border-transparent outline-none focus:outline-none" placeholder="Recherche">
      <div class="h-12 w-12 bg-grey rounded-lg flex items-center justify-center" @click="toggle">
        <i class="eva eva-options-2-outline icon-2xl"></i>
      </div>
    </div>
    <div class="flex flex-row flex-no-wrap overflow-x-scroll py-3 -mx-4 px-4">
      <nuxt-link
        class="eva eva-settings-2-outline bg-grey p-1 rounded-lg mr-2"
        to="/categories"
      />
      <ButtonBadge
        v-for="category in categories"
        :key="category.id"
      >{{ category.name }}</ButtonBadge>
    </div>
    <div class="grid gap-y-4">
      <Card
        v-for="recipe in recipes"
        :key="recipe.id"
        :recipe="recipe"
      />
    </div>
    <ButtonAdd />
  </div>
</template>

<script>
import recipes_query from '~/gql/queries/recipes'
import categories from '~/gql/queries/categories'
import { mapMutations, mapActions } from 'vuex'

export default {
  apollo: {
    recipes: {
      query: recipes_query,
    },
    categories: {
      query: categories,
    },
  },
  data: () => ({
    categories_id: []
  }),
  beforeMount() {
    // this.title('Trier par')
    this.base('Filters')
    // this.base_props({
    //   title: 'heyyyy'
    // })
  },
  methods: {
    ...mapMutations('bottom-sheet', ['title', 'base', 'details', 'base_props', 'toggle']),
    ...mapActions('bottom-sheet', ['init']),
  }
}
</script>

<style scoped>
.icon-2xl {
  @apply text-2xl !important;
}
</style>
