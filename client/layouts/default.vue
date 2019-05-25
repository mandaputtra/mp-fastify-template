<template>
  <v-app id="unautorize">
    <blankNav class="elevation-0" color="blue" />
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm6 md4>
          <nuxt />
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import blankNav from '@/components/commons/blank-nav'

export default {
  components: {
    blankNav
  }
}
</script>
