<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Register User</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              id="fullname"
              name="Fullname"
              label="Full Name"
              type="Fullname"
              v-model="fullname"
              required
            ></v-text-field>
            <v-text-field
              id="username"
              name="Username"
              label="Username"
              type="Username"
              v-model="username"
              required
            ></v-text-field>
            <v-text-field
              prepend-icon="person"
              name="email"
              label="Email"
              type="text"
              v-model="emailStr"

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
            <v-text-field
              id="ConfirmPassword"
              prepend-icon="lock"
              name="ConfirmPassword"
              label="Confirm Password"
              type="ConfirmPassword"
              v-model="passwordStr2"
              :error-messages="passwordErrors"
              required
            ></v-text-field>
            
            <v-layout align-center justify-center>
            </v-layout>
            <v-layout align-center justify-center>
              <v-btn color="primary" to="/login">Back</v-btn>
              <v-btn color="primary" @click="signup">Register</v-btn>
            </v-layout>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
// import { required, email } from "vuelidate/lib/validators";

const fb = require('../firebaseConfig.js')
export default {
  

  // validations: {
  //   emailStr: { required, email },
  //   passwordStr: { required }
  // },
  data: () => ({
    username: "",
    fullname: "",
    emailStr: "",
    passwordStr: "",
    passwordStr2: "",
    errorMsg: "",
    passwordErrors: "",
    passwordErrors2: ""
  }),
  // computed: {
  //   passwordErrors() {
  //     const errors = [];
  //     if (!this.passwordStr || !this.passwordStr.$dirty) return errors;
  //     !this.passwordStr.required && errors.push("Password is required.");
  //     return errors;
  //   },
  //   emailErrors() {
  //     const errors = [];
  //     if (!this.emailStr || !this.emailStr.$dirty) return errors;
  //     !this.emailStr.email && errors.push("Must be valid e-mail");
  //     !this.emailStr.required && errors.push("E-mail is required");
  //     return errors;
  //   }
  // },
  methods: {
    signup() {
        this.performingRequest = true

        const newUser = {
          username: this.username,
          email: this.email,
          password: this.password,
          fullname: this.fullname,
          location: '',
          gameProfile: '',
          gameState: ''  
          
        }
        console.log(newUser)
        fb.usersCollection.push().set({
            
            email: this.emailStr,
            password: this.passwordStr,
            fullname: this.fullname, 
            location: '',   
            gameProfile: '',
            gameState: ''  
            
          
        }).then((data)=>{
            //success callback
            console.log('data ' , data)
            this.$router.push('/login')
        }).catch((error)=>{
            //error callback
            console.log('error ' , error)
        })
        // fb.auth.createUserWithEmailAndPassword(this.emailStr, this.passwordStr).then(user => {
        //     this.$store.commit('setCurrentUser', user)
        //     // create user obj
        //     fb.usersCollection.doc(user.uid).set({
        //         email: this.emailStr,
        //         password: this.passwordStr,
        //         fullname: this.fullname
        //     }).then(() => {
        //       console.log("success register")
        //         this.$store.dispatch('fetchUserProfile')
        //         this.performingRequest = false
        //         this.$router.push('/dashboard')
        //     }).catch(err => {
        //         console.log('err',err)
        //         this.performingRequest = false
        //         this.errorMsg = err.messagesssss
        //     })
        // }).catch(err => {
        //     console.log(err)
        //     this.performingRequest = false
        //     this.errorMsg = err.message
        // })
    }

  }
};




</script>








