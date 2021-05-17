<template>
  <div class="grid gap-4 p-4">
    <PageTitle back>Catégories</PageTitle>
    <InputText
        label="Ajouter une catégorie"
        v-model="category"
    />
  </div>
</template>

<script>
import categories from '~/gql/queries/categories'
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
    }
}
</script>

