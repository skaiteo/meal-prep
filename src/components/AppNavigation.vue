<template>
    <span>
        <!-- Side nav bar -->
        <v-navigation-drawer app dark v-model="drawer" class="brown lighten-2" disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{ item.title }}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>

        <!-- Main Toolbar -->
        <v-toolbar app dark color="brown darken-4">
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
            </router-link>
            <v-btn flat class="hidden-sm-and-down" to="/menu">Menu</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <div v-if="isAuthenticated">
                <v-btn flat to="/about">{{ username }}</v-btn>
                <v-btn outline color="white" @click="logout">LOG OUT</v-btn>
            </div>
            <div v-else class="hidden-sm-and-down">
                <!-- <v-btn outline @click="logInCharlie">Log In as Charlie</v-btn> -->
                <v-btn flat to="/login">LOG IN</v-btn>
                <v-btn color="brown darken-1" to="/join">JOIN</v-btn>
            </div>
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    
    data() {
        return {
            appTitle: 'Meal Prep',
            drawer: false,
            items: [
                { title: "Menu" },
                { title: "Profile" },
                { title: "Log In" },
                { title: "Join" },
            ]
        }
    },

    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        },

        username() {
            return this.$store.getters.username;
        }
    },

    methods: {
        logout() {
            this.$store.dispatch('userSignOut');
        },
        logInCharlie() {
            this.$store.dispatch('userLogin', {
                email: 'charliemhz@email.com',
                password: 'secret'
            })
        }
    },
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>
