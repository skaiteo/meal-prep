<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">

                    <v-toolbar dark color="brown darken-2">
                        <v-toolbar-title>Sign Up Form</v-toolbar-title>
                    </v-toolbar>

                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                                prepend-icon="person"
                                name="email"
                                label="Email"
                                type="email"
                                v-model="email"
                                :rules="emailRules"
                                required
                            ></v-text-field>
                            <v-text-field
                                prepend-icon="lock"
                                name="password"
                                label="Password"
                                id="password"
                                type="password"
                                v-model="password"
                                :rules="passwordRules"
                                required
                            ></v-text-field>
                        </v-form>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn dark color="brown darken-1" :disabled="!valid" @click="submit">Sign Up</v-btn>
                    </v-card-actions>
                    
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'SignUp',
    data() {
        return {
            valid: false,
            // username: '',
            email: '',
            password: '',
            // usernameRules: [
            //     v => !!v || 'Username is required',
            //     v => this.sampleName || 'Username is already taken'
            // ],
            emailRules: [
                v => !!v || 'Email is required',
                v => /.+@.+/.test(v) || 'Email must be valid'
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => v.length >= 6 || 'Password must be greater than 6 characters'
            ],
        }
    },

    // computed: {
    //     sampleName() {
    //         return 'voldemort'
    //     }
    // },

    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('userSignUp', {
                    email: this.email,
                    password: this.password
                })
            }
        }
    },
};
</script>

<style scoped>
</style>
