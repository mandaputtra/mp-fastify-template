<template>
  <v-flex>
    <v-card class="elevation-0">
      <v-card-title>
        <p class="caption mb-0 ml-2">
          APP SUMMARY
        </p>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'auth'
}
</script>
