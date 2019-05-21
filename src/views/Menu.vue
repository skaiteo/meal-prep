<template>
    <!-- <v-container fluid>
        <v-layout>
            <h1>Menu Page</h1>
        </v-layout>
    </v-container> -->
    <span>
        <home-plans></home-plans>
        <meal-recipes v-if="this.$store.state.recipes.length"></meal-recipes>
        <meal-recipes-loading v-else-if="this.$store.state.loading"></meal-recipes-loading>
    </span>
</template>

<script>
import HomePlans from '@/components/HomePlans';
import MealRecipes from '@/components/MealRecipes';
import MealRecipesLoading from '@/components/MealRecipesLoading';
import store from '@/store';

export default {
    name: 'Menu',
    
    components: {
        HomePlans,
        MealRecipes,
        MealRecipesLoading
    },

    beforeRouteEnter (to, from, next) {
        store.commit('clearRecipes');
        next();
    }
}
</script>

<style scoped>

</style>