<template>
  <v-app>
    <drawer :show="drawer" @close="closeDrawer" />
    <appNavbar @openDrawer="drawer = !drawer" />
    <v-content>
      <v-container fluid grid-list-sm>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import appNavbar from '@/components/commons/def-navbar'
import drawer from '@/components/commons/drawer-menu'
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
