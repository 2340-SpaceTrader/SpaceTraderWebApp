<template>
    
    <v-layout  align-center justify-center>
      <v-flex xs12 sm8 md5>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Market Place</v-toolbar-title>
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
                <v-flex xs5 offset-xs1>
                    <v-overflow-btn
                        :items="contain_site"
                        label="Please Select One"
                        target="#dropdown-example"
                    ></v-overflow-btn>
                </v-flex>
                <v-flex xs5 offset-xs1>
                    <v-overflow-btn
                        :items="contain_site"
                        label="Please Select One"
                        target="#dropdown-example"
                    ></v-overflow-btn>
                </v-flex>
            </v-layout>


            <v-layout row align-start justify-space-around>
                <v-btn large color="primary" @click="buy">BUY ITEMS</v-btn>
                <v-btn large color="primary" @click="sell">SELL ITEMS</v-btn>
            </v-layout>

            

            <v-layout row align-start justify-space-around>
                <v-btn color="primary" to="/GameView">BACK</v-btn>
                <v-btn color="primary" to="/GameView">DONE</v-btn>
            </v-layout>


          <!-- </v-card-actions> -->
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
  const fb = require('../firebaseConfig.js')
  var itemlist = [];
  var listname = [];
  var gameProfile;
  var gameState;
  fb.db.ref('Users/-LdE490P64UFp6SuwRiH/').on('value', function(snapshot) {
     gameProfile = snapshot.val()['gameProfile'];
     gameState = snapshot.val()['gameState'];
     gameState['Items'].forEach(item => {
      itemlist.append(item);
      listname.append(item.Name);
     })
    })
  export default {
    data () {
        
      return {
        contain_site: ['water', 'clothes', 'fire', 'rock', 'dimond', 'wood', 'candy', 'chip', 'fuel'],
        name: 'Hello', fuel: "200.0", planet: "Planet123", position: "(2,5)", resource: "Resource123"
      }
    },
    props: {
      source: String
    },
    methods: {
    buy() {
        
        this.$router.push('/gameview')
      },

    sell() {
        
        this.$router.push('/gameview')
    }

    }
  }
</script>