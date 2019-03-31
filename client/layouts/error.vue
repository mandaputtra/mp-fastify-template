<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm6 md4>
        <p class="title">
          {{ error.message }}
        </p>
        <p class="subheading">
          {{ error.statusCode }}
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable vue/require-prop-types */

export default {
  props: ['error']
}
</script>
