<template>
  <v-toolbar color="blue" dark fixed app>
    <v-toolbar-side-icon @click.stop="openDrawer" />
    <v-toolbar-title>
      VF<i><b>CMS</b></i>
    </v-toolbar-title>
    <v-spacer />
    <accountMenu :show="showAccountMenu" @close="closeAccountMenu" />
  </v-toolbar>
</template>

<script>
import accountMenu from './account-dropdown'

export default {
  components: {
    accountMenu
  },
  data: () => {
    return {
      showAccountMenu: false
    }
  },
  methods: {
    openDrawer() {
      this.$emit('openDrawer')
    },
    closeAccountMenu() {
      this.showAccountMenu = false
    }
  }
}
</script>
