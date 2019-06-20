import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import firebase from 'firebase';
import router from '@/router';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        recipes: [],
        recipeUrl: 'https://api.edamam.com/search',
        plan: '',
        loading: false,
        user: null,
        isAuthenticated: false,
        userRecipes: []
    },

    getters: {
        isAuthenticated(state) {
            return state.user !== null && state.user !== undefined;
        },

        username(state) {
            return (state.user) ? state.user.email : null;
        }
    },

    mutations: {
        clearRecipes(state) {
            state.recipes = [];
        },

        setRecipes(state, payload) {
            state.recipes = payload;
            state.loading = false;
        },

        setPlan(state, payload) {
            state.recipes = [];
            state.loading = true;
            state.plan = payload;
        },

        setUser(state, payload) {
            state.user = payload;
        },

        setAuthenticated(state, payload) {
            state.isAuthenticated = payload;
        },

        setUserRecipes(state, payload) {
            state.userRecipes = payload;
        }
    },

    actions: {
        async getRecipes({ state, commit }, plan) {
            try {
                let response = await axios.get(`${state.recipeUrl}`, {
                    params: {
                        q: plan,
                        app_id: '87242c40',
                        app_key: '69cb8260d5381392065612905fa05260',
                        // from: 0,
                        // to: 10
                    }
                });
                commit('setRecipes', response.data.hits);
            } catch (error) {
                commit('setRecipes', []);
            }
        },

        userSignUp({ commit }, { email, password }) {
            firebase.auth()
                .createUserWithEmailAndPassword(email, password)
                .then(response => {
                    commit('setUser', response.user);
                    commit('setAuthenticated', true);
                    router.push('/');
                })
                .catch(error => {
                    console.log(error.response.data);
                    commit('setUser', null);
                    commit('setAuthenticated', false);
                    // Clear password and inform user
                });
        },

        userLogin({ commit }, { email, password }) {
            firebase.auth()
                .signInWithEmailAndPassword(email, password)
                .then(response => {
                    commit('setUser', response.user);
                    commit('setAuthenticated', true);
                    router.push('/about');
                })
                .catch(error => {
                    console.log(error.response.data);
                    commit('setUser', null);
                    commit('setAuthenticated', false);
                    // Clear the password and inform user
                });
        },

        userSignOut({ commit }) {
            firebase.auth()
                .signOut()
                .then(() => {
                    commit('setUser', null);
                    commit('setAuthenticated', false);
                    router.push('/');
                })
                .catch(error => {
                    console.log(error.response.data);
                });
        },

        addRecipe({ state }, payload) {
            firebase.database()
                .ref('users')
                .child(state.user.uid)
                .push(payload.recipe.label);
        },

        removeRecipe({ state, dispatch }, payload) {
            firebase.database()
                .ref('users')
                .child(state.user.uid)
                .child(payload)
                .remove();
            dispatch('getUserRecipes');
        },

        getUserRecipes({ state, commit }) {
            firebase.database()
                .ref('users/' + state.user.uid)
                .once('value', snapshot => {
                    commit('setUserRecipes', snapshot.val());
                });
        }
    }
});
