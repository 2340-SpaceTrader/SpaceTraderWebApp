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
                  <input v-model="message" placeholder="Enter Name">

                </v-flex>

                <v-flex xs5 offset-xs1>
                  <p class="text-md-center">Game Difficulty: </p>
                  <v-overflow-btn
                      :items="contain_site"
                      label="Please Select One"
                      target="#dropdown-example"
                  ></v-overflow-btn>
              </v-flex>
            </v-layout>

            <v-layout row align-start justify-space-around>
                <v-flex xs2>
                  <p class="text-lg-left">Pilot Points:</p>
                  <input v-model="message" placeholder="Enter Points">
                </v-flex>
                <v-flex xs2>
                  <p class="text-lg-left">Engineer Points:</p>
                  <input v-model="message" placeholder="Enter Points">
                </v-flex>
                <v-flex xs2>
                  <p class="text-lg-left">Fighter Points:</p>
                  <input v-model="message" placeholder="Enter Points">
                </v-flex>
                <v-flex xs2>
                  <p class="text-lg-left">Trader Points:</p>
                  <input v-model="message" placeholder="Enter Points">
                </v-flex>
            </v-layout>

            <v-layout row align-start justify-space-around>
                <v-btn color="primary" to="/RegNav">Log Transit</v-btn>
                <v-btn color="primary" to="/RegNav">Back</v-btn>
            </v-layout>


          <!-- </v-card-actions> -->
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
  export default {
    data () {
        
      return {
        contain_site: ['Beginner', 'Easy', 'Normal', 'Hard', 'Impossible'],
      }
    },
    props: {
      source: String
    }
  }
</script>