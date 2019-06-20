<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="headline font-weight-bold my-5">Available Recipes for {{ $store.state.plan | capitalize }}</v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm6 md6 lg4 v-for="(item, index) in recipes" :key="index">
                <v-card height="100%" class="flexcard">
                    <v-img :src="item.recipe.image"></v-img>

                    <v-card-text class="grow">
                        <div class="title my-3">{{ item.recipe.label }}</div>

                        <div class="subheading">Ingredients</div>
                        <ul>
                            <li v-for="(ingredient, index) in item.recipe.ingredientLines" :key="index">
                                {{ ingredient }}
                            </li>
                        </ul>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn dark block color="secondary" @click="orderRecipe(item)">Order</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    computed: {
        recipes() {
            return this.$store.state.recipes;
        },
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        },
    },

    filters: {
        capitalize(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    },

    methods: {
        orderRecipe(item) {
            if (this.isAuthenticated) {
                this.$store.dispatch('addRecipe', item);
                this.$emit('recipe-added');
            } else {
                this.$router.push('/login');
            }
        }
    },
}
</script>

<style scoped>
.flexcard {
    display: flex;
    flex-direction: column;
}

.grow {
    vertical-align: top;
}
</style>
