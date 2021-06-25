<template>
  <div>
      <PageSection title="Informations">
        <InputText
            label="Titre de la recette"
            v-model="value.title" 
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
                    :active="value.categories_id.includes(category.id)"
                    @click.native="selectCategory(category.id)"
                >{{ category.name }}</ButtonBadge>
            </div>

        </PageSection>

        <PageSection title="Difficulté">
            <div class="grid grid-cols-3 gap-4 mb-2">
                <InputChoice
                    v-model="value.difficulty"
                    option="recipes.difficulty.easy"
                >Facile</InputChoice>
                <InputChoice
                    v-model="value.difficulty"
                    option="recipes.difficulty.normal"
                >Moyen</InputChoice>
                <InputChoice
                    v-model="value.difficulty"
                    option="recipes.difficulty.difficult"
                >Difficile</InputChoice>
            </div>
        </PageSection>

        <PageSection title="Réalisation">
            <div class="grid grid-cols-3 gap-4 mb-2">
                <InputChoice
                    v-model="value.done"
                    :option="true"
                ><i class="eva eva-checkmark-circle-2 mr-1" :class="{'icon-active': value.done}" /> Déjà fait</InputChoice>
                <InputChoice
                    v-model="value.done"
                    :option="false"
                ><i class="eva eva-checkmark-circle-2-outline mr-1" :class="{'icon-active': !value.done}" /> A faire</InputChoice>
            </div>
        </PageSection>

        <PageSection title="Temps">
        <!-- Temps de préparation -->
            <InputTime
                label="Temps de préparation"
                v-model.number="value.preparation_time"
                class="mb-2"
            />

            <!-- Temps de cuisson -->
            <InputTime
                label="Temps de cuisson"
                v-model.number="value.baking_time"
                class="mb-2"
            />
            <!-- Temps de repos -->
            <InputTime
                label="Temps de repos"
                v-model.number="value.rest_time"
                class="mb-2"
            />

            <InputLabel class="mb-2">
                Temps total : 
                <span class="ml-1 font-poppins font-semibold">{{ total | time }}</span> 
                <span v-if="value.rest_time" class="ml-1 font-poppins font-semibold">(+ {{ value.rest_time | time }} de repos)</span>
            </InputLabel>

        </PageSection>

        <PageSection title="Portions">
            <InputServing inline v-model.number="value.servings" class="mb-2"/>
        </PageSection>

        <PageSection title="Nécessaire / Equipement">
            <InputArea
                label="Ingredients"
                v-model="value.ingredients"
                class="mb-2"
                @blur="transform(value.ingredients)"
                @focus="transform(value.ingredients)"
            />

            <InputArea
                label="Ustensiles"
                v-model="value.utensils"
                class="mb-2"
                @blur="transform(value.utensils)"
                @focus="transform(value.utensils)"
            />
        </PageSection>
        
        <PageSection title="Préparation">
            <InputSteps v-model="value.preparation_steps"/>
        </PageSection>
    
        <PageSection title="Informations supplémentaires">
            <!-- <InputArea
                label="Notes"
                v-model="value.notes"
            /> -->
        </PageSection>
  </div>
</template>

<script>
import categories from '~/gql/queries/categories'

export default {
    apollo: {
        categories: {
            query: categories,
        },
    },
    props: {
        value: {
            type: Object,
            required: true
        }
    },
    methods: {
        selectCategory(id) {
            this.value.categories_id.includes(id)
                ? this.value.categories_id.splice(this.value.categories_id.indexOf(id), 1)
                : this.value.categories_id.push(id)
        },
        transform(value) {
            if (value) {
                typeof value == 'string'
                    ? value = value.split('\n')
                    : value = value.join('\n')
            }
        }
    },
    computed: {
        total() {
            return (Number(this.value.preparation_time) + Number(this.value.baking_time)) || 0
        },
    },
}
</script>

<style scoped>
.icon-active:before {
  color: white !important;
}
</style>
