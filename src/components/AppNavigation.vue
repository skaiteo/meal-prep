<template>
    <span>
        <!-- Side nav bar -->
        <v-navigation-drawer
            app
            dark
            v-model="drawer"
            class="brown lighten-2"
            disable-resize-watcher
        >
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index" @click="navigateTo(index)">
                        <v-list-tile-content>{{ item.title }}</v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
                <template v-if="isAuthenticated">
                    <v-list-tile @click="logout">
                        <v-list-tile-content>{{ 'Log Out' }}</v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>
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
                <v-btn flat to="/about" class="hidden-sm-and-down">{{ username }}</v-btn>
                <v-btn outline class="hidden-sm-and-down" color="white" @click="logout">LOG OUT</v-btn>
            </div>
            <div v-else class="hidden-sm-and-down">
                <!-- <v-btn outline @click="logInCharlie">Log In as Charlie</v-btn> -->
                <v-btn flat to="/login">LOG IN</v-btn>
                <v-btn color="brown darken-1" to="/signup">SIGN UP</v-btn>
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
            drawer: false
        };
    },

    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        },

        username() {
            return this.$store.getters.username;
        },

        items() {
            if (this.isAuthenticated) {
                return [
                    { title: 'Menu', to: '/menu' },
                    { title: 'Profile', to: '/about' }
                ];
            } else {
                return [
                    { title: 'Menu', to: '/menu' },
                    { title: 'Profile', to: '/about' },
                    { title: 'Log In', to: '/login' },
                    { title: 'Sign Up', to: '/signup' }
                ];
            }
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
            });
        },
        navigateTo(index) {
            this.$router.push(this.items[index].to);
        }
    }
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>
