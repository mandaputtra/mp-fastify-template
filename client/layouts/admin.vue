<template>
  <v-app>
    <drawer :show="drawer" @close="closeDrawer" />
    <appNavbar @openDrawer="drawer = !drawer" />
    <v-content>
      <v-container fluid grid-list-sm>
        <v-layout justify-center column fill-height>
          <breadcrubms />
          <nuxt />
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import appNavbar from '@/components/commons/def-navbar'
import drawer from '@/components/commons/drawer-menu'
import breadcrubms from '@/components/commons/breadcrumb'

export default {
  components: {
    appNavbar,
    drawer,
    breadcrubms
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
