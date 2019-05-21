<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-bold white--text text-xs-center">HEALTHY MEALS</div>
            <div class="display-4 font-weight-bold white--text text-xs-center mb-3">FOR YOUR TABLE</div>

            <div class="display-1 font-weight-medium white--text text-xs-center">
                Finally be a foodie at home with fresh, chef-prepared meals delivered daily to your door.
            </div>

            <v-btn fab class="mt-5 brown darken-3">
                <v-icon large color="white">expand_more</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
}
</script>

<style scoped>
.home-hero {
    background: 
        linear-gradient( 
            rgba(0, 0, 0, 0), 
            rgba(0, 0, 0, 0.5) 
        ), 
        url('https://source.unsplash.com/y3aP9oo9Pjc'); /* 0BhSKStVtdM, y3aP9oo9Pjc */
    background-size: cover;
    height: 100%;
    width: 100%;
}
</style>
