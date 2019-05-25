<template>
  <v-layout justify-center column fill-height>
    <breadcrubms />
    <v-flex>
      <v-card class="elevation-0">
        <v-card-title>
          <p class="caption mb-0 ml-2">
            USER
          </p>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-card />
  </v-layout>
</template>

<script>
import breadcrubms from '@/components/commons/breadcrumb'

export default {
  layout: 'admin',
  middleware: 'auth',
  components: {
    breadcrubms
  }
}
</script>
