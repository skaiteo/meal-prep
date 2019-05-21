<template>
    <v-container grid-list-lg>
        <v-layout column>
            <div xs12 class="headline font-weight-bold my-5">Available Recipes for {{ $store.state.plan | capitalize }}</div>
            <v-flex class="text-xs-center subheading">Loading...</v-flex>
        </v-layout>
        <!-- <v-layout row fluid>
        </v-layout> -->
    </v-container>
</template>

<script>
export default {
    filters: {
        capitalize(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    }
}
</script>

<style scoped>

</style>
