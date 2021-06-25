<template>
    <div class="text-center grid gap-4">
        <PageSection title="Suppression de la recette">
            <h2 class="text-3xl mb-4">Mafé</h2>
            <p class="mb-4 text-xs">Êtes-vous sûr de vouloir supprimer cette recette ?</p>
            <div class="grid grid-cols-2 gap-4 px-4">
                <button
                    class="h-10 w-full focus:outline-none text-sm font-bold border rounded-lg bg-neutral-light text-neutral-dark"
                     @click="toggle"
                >
                    Annuler
                </button>
                <button
                    class="h-10 w-full focus:outline-none text-sm font-bold border rounded-lg bg-semantic-pink text-neutral-white"
                    @click="deleteRecipe"
                >
                    Supprimer
                </button>
            </div>
        </PageSection>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    methods: {
        deleteRecipe() {
            return this.close()
        },
        ...mapMutations('bottom-sheet', ['toggle'])
    }
}
</script>