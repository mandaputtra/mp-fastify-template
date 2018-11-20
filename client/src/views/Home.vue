<template>
  <v-layout>
    <v-flex xs12 md12 lg12>
      <v-card>
        <v-card-title primary-title>
          <span class="title">Login</span>
        </v-card-title>
        <v-form class="ma-3">
          <v-text-field
            label="Email"
          ></v-text-field>
          <v-text-field
            label="Password"
          ></v-text-field>
        </v-form>
        <v-btn block>
          submit
        </v-btn>
      </v-card>
    </v-flex>
  </v-layout>
</template>
