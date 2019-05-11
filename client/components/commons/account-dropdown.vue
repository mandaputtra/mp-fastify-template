<template>
  <v-menu min-width="200" offset-y>
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon>more_vert</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-tile @click="logout">
        <v-list-tile-title>
          <v-layout>
            <v-icon>
              exit_to_app
            </v-icon>
            <span class="ml-2">Logout</span>
          </v-layout>
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$axios
        .get('/logout')
        .then(() => {
          this.$store
            .dispatch('users/removeUserData')
            .then(() => this.$router.push('/login'))
        })
        .catch(err => err)
    }
  }
}
</script>

<style></style>
