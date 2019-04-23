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
              id="Firstname"
              name="Firstname"
              label="First Name"
              type="Text"
              v-model="passwordStr"
              :error-messages="passwordErrors"
              required
              @input="$v.passwordStr.$touch()"
              @blur="$v.passwordStr.$touch()"
            ></v-text-field>
            <v-text-field
              id="Lastname"
              name="Lastname"
              label="Last Name"
              type="Lastname"
              v-model="passwordStr"
              :error-messages="passwordErrors"
              required
              @input="$v.passwordStr.$touch()"
              @blur="$v.passwordStr.$touch()"
            ></v-text-field>
            <v-text-field
              id="Username"
              name="Username"
              label="Username"
              type="Username"
              v-model="passwordStr"
              :error-messages="passwordErrors"
              required
              @input="$v.passwordStr.$touch()"
              @blur="$v.passwordStr.$touch()"
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
              @input="$v.passwordStr.$touch()"
              @blur="$v.passwordStr.$touch()"
            ></v-text-field>
            <v-text-field
              id="ConfirmPassword"
              prepend-icon="lock"
              name="ConfirmPassword"
              label="Confirm Password"
              type="ConfirmPassword"
              v-model="passwordStr"
              :error-messages="passwordErrors"
              required
              @input="$v.passwordStr.$touch()"
              @blur="$v.passwordStr.$touch()"
            ></v-text-field>
            <v-text-field
              prepend-icon="person"
              name="email"
              label="Email"
              type="text"
              v-model="emailStr"
              :error-messages="emailErrors"
              required
              @input="$v.emailStr.$touch()"
              @blur="$v.emailStr.$touch()"
            ></v-text-field>
            <v-layout align-center justify-center>
            </v-layout>
            <v-layout align-center justify-center>
              <v-btn color="primary" to="/RegNav">Back</v-btn>
              <v-btn color="primary" to="/RegNav">Register</v-btn>
            </v-layout>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>