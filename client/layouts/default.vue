<template>
  <v-app>
    <drawer :show="drawer" @close="closeDrawer" />
    <appNavbar @openDrawer="drawer = !drawer" />
    <v-container>
      <v-layout>
        <v-flex>
          <nuxt />
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import appNavbar from '../components/commons/def-navbar'
import drawer from '../components/commons/drawer-menu'

export default {
  components: {
    appNavbar,
    drawer
  },
  data: () => {
    return {
      drawer: false
    }
  },
  methods: {
    closeDrawer(value) {
      this.drawer = value
    }
  }
}
</script>
