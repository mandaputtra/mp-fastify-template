<template>
  <v-flex>
    <v-card class="elevation-0">
      <v-card-title>
        <p class="caption mb-0 ml-2">
          USER LIST
        </p>
      </v-card-title>
      <dataTable
        :headers="headersUserList"
        :total="totalUsers"
        :items="users"
        :pagination.sync="pagination"
      />
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
  },
  data: () => {
    return {
      headersUserList: [
        { text: 'Email', sortable: true, value: 'name' },
        { text: 'Role', sortable: true, value: 'role' },
        { text: 'Joined at', sortable: true, value: 'createdAt' }
      ],
      users: [],
      totalUsers: null,
      pagination: {}
    }
  },
  watch: {
    pagination: {
      handler() {
        console.log('helllooo')
      },
      deep: true
    }
  },
  mounted() {
    //  get user list
    this.$axios
      .get('/users')
      .then(res => {
        this.users = res.data.users.docs
        this.totalUsers = res.data.users.totalDocs
        console.log(res.data.users)
      })
      .catch(err => Error(err))
  }
}
</script>
