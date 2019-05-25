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
      <v-list-tile @click="$router.push('/admin/user')">
        <v-list-tile-action>
          <v-icon size="28">
            supervised_user_circle
          </v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            User
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon size="28">
            insert_drive_file
          </v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            Menu
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
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
