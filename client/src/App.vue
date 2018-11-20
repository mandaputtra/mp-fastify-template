<template>
  <v-app id="app">
    <app-header @openIt="openDrawer"/>
    <side-drawer :opendrawer="drawer"/>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppHeader from '@/components/Header'
import SideDrawer from '@/components/SideDrawer'

export default {
  components: {
    'app-header': AppHeader,
    'side-drawer': SideDrawer
  },
  data: () => ({
    drawer: true
  }),
  methods: {
    openDrawer () {
      if (this.drawer === true) {
        this.drawer = false
      } else {
        this.drawer = true
      }
    }
  }
}
</script>
