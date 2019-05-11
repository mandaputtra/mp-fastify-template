<template>
  <v-navigation-drawer
    :value="show"
    absolute
    left
    app
    @input="$emit('close', $event)"
  >
    <headDrawer />
  </v-navigation-drawer>
</template>

<script>
import headDrawer from './drawer/head-drawer'
export default {
  components: {
    headDrawer
  },
  props: {
    show: { type: Boolean, default: false }
  }
}
</script>
