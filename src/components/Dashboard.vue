<template>
    <v-layout  align-center justify-center>
      <v-flex xs12 sm8 md3>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Dashboard</v-toolbar-title>
          </v-toolbar>

          <!-- <v-card-actions> -->
            <v-layout row align-space-between justify-center>
              <v-flex md4>
                <v-layout align-space-left justify-left column>
                  <v-btn color="primary" to="/RegNav">New Game</v-btn>
                </v-layout>
              </v-flex>

              <v-flex md4>
                <v-layout align-space-right justify-right column>
                  <v-btn color="primary" to="/RegNav">Continue</v-btn>
                </v-layout>
              </v-flex>

            </v-layout>
          <!-- </v-card-actions> -->
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
  export default {
    data: () => ({
    }),
    props: {
      source: String
    }
  }
</script>