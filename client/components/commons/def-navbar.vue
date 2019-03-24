<template>
  <v-toolbar color="blue" dark fixed app>
    <v-toolbar-side-icon @click.stop="openDrawer" />
    <v-toolbar-title>
      VF<i><b>CMS</b></i>
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    openDrawer() {
      this.$emit('openDrawer')
    }
  }
}
</script>
