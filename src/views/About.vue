<template>
    <v-container>
        <v-layout column>
            <h1 class="title my-3">My Recipes</h1>
            <ul v-if="userRecipes">
                <li v-for="(item, index) in userRecipes" :key="index" class="subheading mb-2">
                    {{ item }}
                </li>
            </ul>
            <div v-else class="grey--text subheading text-xs-center">You don't have any recipes yet.</div>
            <v-btn fluid color="secondary mt-4" to="/menu">Go To Menu</v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
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
        }
    },
}
</script>

<style scoped>

</style>
