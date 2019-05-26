<template>
  <v-list-tile @click="$router.push(action)">
    <v-list-tile-action>
      <v-icon size="28">
        {{ icon }}
      </v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>
        {{ name }}
      </v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  props: {
    icon: { type: String, default: 'dashboard' },
    name: { type: String, default: 'This is menu name' },
    action: { type: String, default: '/admin' }
  }
}
</script>
