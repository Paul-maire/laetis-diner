<template>
  <div
    v-if="recipe"
  >
    <div class="aspect-w-16 aspect-h-9">
      <img :src="recipe.image">
      <div class="p-4 flex flex-row justify-between">
        <PageBack class="bg-white shadow-md rounded-lg px-1 w-fit h-fit"/>
        <PageEdit :id="id" />
      </div>
    </div>

    <div class="grid gap-8 p-4">
      <PageTitle>{{ recipe.title  }}</PageTitle>
      <ButtonBadge
        v-for="category in recipe.categories"
        :key="category.id"
      >{{ category.name }}</ButtonBadge>

      <InputServing inline v-model="recipe.servings" />

      <PageSection title="Ingrédients">

      </PageSection>

      <PageSection title="Ustentiles">

      </PageSection>

      <PageSection title="Préparation">
        <ul>
          <li
            v-for="(step, index) in recipe.preparation_steps"
            :key="index"
            class="flex flex-row pb-2"
          >
            <div class="text-xl font-semibold mr-4">{{ index + 1 }}</div>
            <p>{{ step }}</p>
          </li>
        </ul>
      </PageSection>

      <PageSection title="Notes">
        <p>{{ recipe.notes }}</p>
      </PageSection>
    </div>
  </div>
</template>

<script>
import recipe_query from '~/gql/queries/recipe'

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
}
</script>