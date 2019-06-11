<template>
    <v-flex fill-height>
        <home-hero></home-hero>
        <home-details></home-details>
        <home-plans></home-plans>
    </v-flex>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeDetails from '@/components/HomeDetails';
import HomePlans from '@/components/HomePlans';

export default {
    components: {
        HomeHero,
        HomeDetails,
        HomePlans
    }
}
</script>

<style scoped>

</style>
