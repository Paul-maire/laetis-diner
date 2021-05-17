<template>
    <div class="flex flex-row w-full justify-between">
        <RecipeDifficulty :difficulty="recipe.difficulty"/>
        <RecipePreparationTime :preparation_time="recipe.preparation_time"/>
        <RecipeDone :done="recipe.done"/>
    </div>
</template>

<script>
export default {
    props: {
        recipe: {
            type: Object,
            required: true
        }
    }
}
</script>