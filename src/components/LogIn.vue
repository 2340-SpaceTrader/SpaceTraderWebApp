<template>
  <v-layout align-center justify-center>
      
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Space Trader</v-toolbar-title>
        </v-toolbar>

        <v-card-text>
          <v-form>
            <v-text-field
              prepend-icon="person"
              name="email"
              label="Email"
              type="text"
              v-model="emailStr"
              :error-messages="emailErrors"
              required
              
              
            ></v-text-field>
            <v-text-field
              id="password"
              prepend-icon="lock"
              name="password"
              label="Password"
              type="password"
              v-model="passwordStr"
              :error-messages="passwordErrors"
              required
              
              
            ></v-text-field>
            <v-layout align-center justify-center>
              <v-btn color="primary" @click="onLogin" to="/dashboard">Login</v-btn>
              <v-btn color="primary" to="/register">Register</v-btn>
            </v-layout>


          </v-form>
          <transition name="fade">
              <div v-if="errorMsg !== ''" class="error-msg">
                  <p>{{ errorMsg }}</p>
              </div>
          </transition>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

const fb = require('../firebaseConfig.js')
export default {
  

  validations: {
    emailStr: { required, email },
    passwordStr: { required }
  },
  data: () => ({
    emailStr: "",
    passwordStr: "",
    performingRequest: false,
    errorMsg: ""
  }),
  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.passwordStr || !this.passwordStr.$dirty) return errors;
      !this.passwordStr.required && errors.push("Password is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.emailStr || !this.emailStr.$dirty) return errors;
      !this.emailStr.email && errors.push("Must be valid e-mail");
      !this.emailStr.required && errors.push("E-mail is required");
      return errors;
    }
  },
  methods: {
    onLogin() {
      // this.$touch();

      this.performingRequest = true
      fb.usersCollection.orderByChild("email").equalTo(this.emailStr).on("value", function(snapshot) {
        if (snapshot.exists()) {
            console.log(snapshot);
             console.log("exists");
        }else{
            console.log("doesn't exist");
          }
        });
      // fb.auth.signInWithEmailAndPassword(this.emailStr, this.passwordStr).then(user => {
      //     this.$store.commit('setCurrentUser', user)
      //     this.$store.dispatch('fetchUserProfile')
      //     this.performingRequest = false
      //     this.$router.push('/dashboard')
      // }).catch(err => {
      //     console.log(err)
      //     this.performingRequest = false
      //     this.errorMsg = err.message
      // })
    }

  }
};
</script> 