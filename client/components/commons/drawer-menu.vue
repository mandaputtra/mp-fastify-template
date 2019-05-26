<template>
  <v-navigation-drawer
    :value="show"
    absolute
    left
    app
    @input="$emit('close', $event)"
  >
    <headDrawer />
    <v-list>
      <listDrawer name="Dashboard" />
      <listDrawer
        icon="supervised_user_circle"
        name="User"
        action="/admin/user"
      />
      <listDrawer icon="insert_drive_file" name="Menu" />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import headDrawer from './drawer/head-drawer'
import listDrawer from './drawer/list-drawer'

export default {
  components: {
    headDrawer,
    listDrawer
  },
  props: {
    show: { type: Boolean, default: false }
  }
}
</script>
