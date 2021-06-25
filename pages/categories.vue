<template>
  <div class="grid gap-4 p-4 grid-rows-12">
    <PageTitle back>Catégories</PageTitle>
    <PageSection title="Ajouter une nouvelle catégorie">
        <InputText
            label="Nom de la catégorie"
            v-model="category"
        />
    </PageSection>

    <PageSection title="Mes catégories">
        <div
            class="shadow-md py-3 px-4 rounded-lg mb-2"
            v-for="category in categories"
            :key="category.id"
        >
            <p class="text-primary text-xs font-semibold">{{ category.name }}</p>
        </div>
    </PageSection>
    <ButtonLarge outline @click="submit">
      Enregistrer
    </ButtonLarge>
  </div>
</template>

<script>
import categories from '~/gql/queries/categories'
import save_category from '~/gql/mutations/save-category'

export default {
    apollo: {
        categories: {
            query: categories,
        },
    },
    data: () => ({
        category: null
    }),

    methods: {
        async submit() {
            if(this.category) {
                await this.$apollo.mutate({
                    mutation: save_category,
                    variables: {
                        category: {
                            name: this.category
                        },
                    },
                    update: (store, { data: { saveCategory } }) => {
                        // Read data from cache
                        const data = store.readQuery({ query: categories })
                        // Add idea from the mutation to the end
                        data.categories.push(saveCategory)
                        // Write data back to the cache.
                        store.writeQuery({ query: categories, data })
                    },
                }).catch(console.error)
            }
        },
    }
}
</script>

