<template>
  <div class="px-4">
    <PageSection title="Difficulté">
        <div class="grid grid-cols-3 gap-4 mb-4">
            <label
                class="btn"
                :class="{'btn-selected': is_easy}"
            >
                <input type="radio" class="hidden" v-model="difficulty" name="difficulty" value="recipes.difficulty.easy">
                Facile
            </label>
            <label
                class="btn"
                :class="{'btn-selected': is_normal}"
            >
                <input type="radio" class="hidden" v-model="difficulty" name="difficulty" value="recipes.difficulty.normal">
                Moyen
            </label>
            <label
                class="btn"
                :class="{'btn-selected': is_expert}"
            >
                <input type="radio" class="hidden" v-model="difficulty" name="difficulty" value="recipes.difficulty.difficult">
                Difficile
            </label>
        </div>
    </PageSection>

    <PageSection title="Réalisation">
        <div class="grid grid-cols-3 gap-4 mb-4">
            <label
                class="btn"
                :class="{'btn-selected': done}"
            >
                <input type="radio" class="hidden" v-model="done" name="done" :value="true">
                Déjà fait
            </label>
            <label
                class="btn"
                :class="{'btn-selected': done == false}"
            >
                <input type="radio" class="hidden" v-model="done" name="done" :value="false">
                A faire
            </label>
        </div>
    </PageSection>
 
    <div class="mb-6 flex items-center">
        <input type="checkbox" name="rest" id="rest" class="mr-2"/>
        <label for="rest">Ne pas avoir de repos</label>
    </div>

    <ButtonLarge outline>
      Filtrer
    </ButtonLarge>
  </div>
</template>

<script>
export default {
    data: () => ({
        done: null,
        difficulty: null,
    }),
    computed: {
        is_easy() {
            return this.difficulty == "recipes.difficulty.easy"
        },
        is_normal() {
            return this.difficulty == "recipes.difficulty.normal"
        },
        is_expert() {
            return this.difficulty == "recipes.difficulty.difficult"
        }
    },
}
</script>

<style scoped>
.btn {
  @apply bg-grey flex items-center justify-center py-2 rounded-xl transition-all duration-150 text-xs font-semibold shadow-none;
}

.btn-selected {
  @apply bg-primary shadow-primary text-white;
}
</style>