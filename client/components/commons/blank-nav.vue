<template>
  <v-toolbar :color="color" dark>
    <v-toolbar-title @click="$router.push('/')">
      <v-icon>arrow_left</v-icon>
      VF<b><i>CMS</i></b>
      <v-icon>arrow_right</v-icon>
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'dark'
    },
    dark: {
      type: Boolean,
      default: true
    }
  }
}
</script>
