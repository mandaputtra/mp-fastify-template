<template>
  <v-flex>
    <v-card class="elevation-0">
      <v-card-title>
        <p class="caption mb-0 ml-2">
          USER LIST
        </p>
      </v-card-title>
      <dataTable />
    </v-card>
  </v-flex>
</template>

<script>
import dataTable from '@/components/data-table/data-table'

export default {
  layout: 'admin',
  middleware: 'auth',
  components: {
    dataTable
  }
}
</script>
