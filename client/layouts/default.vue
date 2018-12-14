<template>
  <v-app>
    <main-drawer :items="items" :clipped="clipped" :drawer="drawer" :mini-variant="miniVariant"/>
    <v-toolbar color="blue" :clipped-left="clipped" fixed app dark>
      <v-toolbar-side-icon @click="drawer = !drawer"/>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"/>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"/>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import mainDrawer from '../components/NavigationDrawer'

export default {
  components: {
    'main-drawer': mainDrawer
  },
  data() {
    return {
      clipped: false,
      drawer: true,
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
