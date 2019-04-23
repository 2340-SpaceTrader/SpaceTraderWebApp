<template>
    
    <v-layout  align-center justify-center>
      <v-flex xs12 sm8 md5>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Space Trader</v-toolbar-title>
          </v-toolbar>

          <!-- <v-card-actions> -->
            <v-layout column align-center justify-space-around>
            <p class="text-md-Left">Name: {{name}}</p>
            <p class="text-md-Left">Fuel: {{fuel}}</p>
            <p class="text-md-Left">Planet: {{planet}}</p>
            <p class="text-md-Left">Position: {{position}}</p>
            <p class="text-md-Left">Resource: {{resource}}</p>
            </v-layout>


            <v-layout row align-start justify-space-around>
                <v-btn large color="primary" to="/MarketPlace">MARKETPLACE</v-btn>
                <v-btn large color="primary" to="/TravelOption">TRAVEL</v-btn>
            </v-layout>

            <v-layout row align-start justify-space-around>
                <v-btn color="primary" to="/Dashboard">BACK</v-btn>
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
        name: 'Hello', fuel: "200.0", planet: "Planet123", position: "(2,5)", resource: "Resource123"
      }
    },
    props: {
      source: String
    }
  }
</script>