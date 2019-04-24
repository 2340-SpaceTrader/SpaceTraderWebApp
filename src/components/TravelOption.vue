<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm12 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Travel Option</v-toolbar-title>
        </v-toolbar>

        <v-card-text>
          <v-form>

<template>
  <v-container fluid>
    <v-layout column wrap align-center>
      <v-flex xs6>
        <v-subheader class="title font-weight-Black">Destination</v-subheader>
      </v-flex>
      <v-flex xs6>
        <v-select
          v-model="e2"
          :items="states"
          menu-props="auto"
          hide-details
          label="Select"
          single-line
        ></v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

            <v-layout align-center justify-center>
            </v-layout>
            <v-layout align-center justify-center>
              <v-btn color="primary" to="/GameView">Back</v-btn>
              <v-btn color="primary" @click="travel" to="/GameView">Done</v-btn>
            </v-layout>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  const fb = require('../firebaseConfig.js')
export default {
  data () {
    return  {
    emailStr: "",
    passwordStr: "" ,   
        e1: null,
        e2: null,
        e3: null,
        e4: null,
        items: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' }
        ],
        states: [
        'Planet 1','Planet 2','Planet 3', 'Planet 4', 'Planet 5', 'Planet 6', 'Planet 7', 'Planet 8', 'Planet 9', 'Planet 10'
        ]
      }
  },
  methods: {
    travel() {
      var f = 200;
      fb.db.ref('Users/-LdE490P64UFp6SuwRiH/gameProfile').on('value', function(snapshot) {
        f = snapshot.val()['fule']
      },
      fb.db.ref('Users/-LdE490P64UFp6SuwRiH/gameProfile').update( {
          fuel: f - 10
          
        }).then((data)=>{
            //success callback
            console.log('data ' , data)
            this.$router.push('/gameview')
        }).catch((error)=>{
            //error callback
            console.log('error ' , error)
        })
      
      )}
    }
    

};
</script>