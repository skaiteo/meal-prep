<template>
    <v-container>
        <v-layout column>
            <h1 class="title my-3">My Recipes</h1>
            <ul v-if="userRecipes">
                <!-- <li v-for="(item, index) in userRecipes" :key="index" class="subheading mb-2">
                    {{ item }}
                </li> -->
                <slide-y-down-transition group :duration="200">
                    <v-list-tile v-for="(item, index) in userRecipes" :key="index">
                        <v-list-tile-content>{{ `${item}` }}</v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon @click="removeRecipe(index)">cancel</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </slide-y-down-transition>
            </ul>
            <div v-else class="grey--text subheading text-xs-center">You don't have any recipes yet.</div>
            <v-btn fluid color="secondary mt-4" to="/menu">Go To Menu</v-btn>
        </v-layout>
        <v-snackbar v-model="snackbar" :timeout="3000" bottom right>
            {{ 'Recipe removed' }}
        </v-snackbar>
    </v-container>
</template>

<script>
import { SlideYDownTransition } from 'vue2-transitions';

export default {
    components: {
        SlideYDownTransition
    },

    data() {
        return {
            snackbar: false
        }
    },

    mounted() {
        this.getRecipes();
    },

    computed: {
        userRecipes() {
            return this.$store.state.userRecipes;
        }
    },

    methods: {
        getRecipes() {
            this.$store.dispatch('getUserRecipes');
        },
        removeRecipe(index) {
            this.$store.dispatch('removeRecipe', index);
            this.snackbar = true;
        }
    },
}
</script>

<style scoped>

</style>
