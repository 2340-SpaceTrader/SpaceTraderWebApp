<template>
    
    <v-layout  align-center justify-center>
      <v-flex xs12 sm8 md5>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>New Game</v-toolbar-title>
          </v-toolbar>

          <!-- <v-card-actions> -->
            <v-layout row align-start justify-space-between>
              <v-flex xs4 offset-xs1>
                  <p class="text-lg-left">Name:</p>
                  <input v-model="name" placeholder="Enter Name">

                </v-flex>

                <v-flex xs5 offset-xs1>
                  <p class="text-md-center">Game Difficulty: </p>
                  <v-overflow-btn
                      :items="contain_site"
                      label="Please Select One"
                      target="#dropdown-example"
                      v-model="level"
                  ></v-overflow-btn>
              </v-flex>
            </v-layout>

            <v-layout row align-start justify-space-around>
                <v-flex xs2>
                  <p class="text-lg-left">Pilot Points:</p>
                  <input v-model="pilot" placeholder="Enter Points">
                </v-flex>
                <v-flex xs2>
                  <p class="text-lg-left">Engineer Points:</p>
                  <input v-model="engineer" placeholder="Enter Points">
                </v-flex>
                <v-flex xs2>
                  <p class="text-lg-left">Fighter Points:</p>
                  <input v-model="fighter" placeholder="Enter Points">
                </v-flex>
                <v-flex xs2>
                  <p class="text-lg-left">Trader Points:</p>
                  <input v-model="trader" placeholder="Enter Points">
                </v-flex>
            </v-layout>

            <v-layout row align-start justify-space-around>
                <v-btn color="primary" @click="create">Done</v-btn>
                <v-btn color="primary" to="/Dashboard">Back</v-btn>
            </v-layout>


          <!-- </v-card-actions> -->
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
  const fb = require('../firebaseConfig.js')
  export default {
    data () {
        
      return {
        contain_site: ['Beginner', 'Easy', 'Normal', 'Hard', 'Impossible'],
        name : "",
        level: "",
        fuel:200,
        planet: "Zodiac",
        pilot: "",
        engineer: "",
        fighter: "",
        trader: ""
      }
    },
    props: {
      source: String
    },
    methods: {
    create() {

        const gameProfile = {
          playername: this.name,
          level: this.level,
          fuel: 200,
          planet: "Zodiac",
          pilot: this.pilot,
          engineer: this.engineer,
          fighter: this.fighter,
          trader: this.trader    
          
        }
        
        var initPlanet;
        
        
        fb.planetsCollection.on('value', function(snapshot) {
          initPlanet = snapshot.val()['Init Planets'];
          fb.db.ref('Users/-LdE490P64UFp6SuwRiH/').update( {
            gameProfile: gameProfile,
            gameState: initPlanet
          }).then((data)=>{
              //success callback
              console.log('data ' , data)
              
          }).catch((error)=>{
              //error callback
              console.log('error ' , error)
          })
        })

        if (initPlanet) {
          this.$router.push('/dashboard')
        }

        
            

        // fb.usersCollection.child('LdDq9QwuFqW4TF5cpkh').set({
        //     gameProfile: gameProfile,
        //     gameState: initPlanet
            
            
          
        // }).then((data)=>{
        //     //success callback
        //     console.log('data ' , data)
        //     this.$router.push('/dashboard')
        // }).catch((error)=>{
        //     //error callback
        //     console.log('error ' , error)
        // })
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
  }
</script>