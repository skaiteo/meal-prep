<template>
    <v-flex fill-height>
        <home-plans></home-plans>
        <meal-recipes v-if="this.$store.state.recipes.length" @recipe-added="snackbar = true"></meal-recipes>
        <meal-recipes-loading v-else-if="this.$store.state.loading"></meal-recipes-loading>
        <v-snackbar v-model="snackbar" :timeout="3000" bottom right>
            {{ 'Recipe added' }}
        </v-snackbar>
        <!-- <meal-recipes-loading></meal-recipes-loading> -->
    </v-flex>
</template>

<script>
import HomePlans from '@/components/HomePlans';
import MealRecipes from '@/components/MealRecipes';
import MealRecipesLoading from '@/components/MealRecipesLoading';
import store from '@/store';

export default {
    name: 'Menu',

    data() {
        return {
            snackbar: false
        }
    },
    
    components: {
        HomePlans,
        MealRecipes,
        MealRecipesLoading
    },

    beforeRouteEnter (to, from, next) {
        store.commit('clearRecipes');
        next();
    },

    // computed: {
    //     snackbar() {
    //         return this.$store.state.menuSnackbar;
    //     }
    // },
}
</script>

<style scoped>

</style>