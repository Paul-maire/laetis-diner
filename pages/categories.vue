<template>
  <div class="grid gap-4 p-4">
    <PageTitle back>Catégories</PageTitle>
    <InputText
        label="Ajouter une catégorie"
        v-model="category"
    />
    <ButtonLarge outline @click="submit">
      Enregistrer
    </ButtonLarge>
  </div>
</template>

<script>
import categories from '~/gql/queries/categories'
import save_category from '~/gql/mutations/save-category'
import { mapMutations, mapActions } from 'vuex'

export default {
    apollo: {
        categories: {
         query: categories,
        },
    },
    data: () => ({
        category: null
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
        async submit() {
            if(this.category) {
                await this.$apollo.mutate({
                    mutation: save_category,
                    variables: {
                        category: {
                            name: this.category
                        },
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
            }
        },
    }
}
</script>

