<template>
<v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="openDrawer()"></v-toolbar-side-icon>
      <v-toolbar-title>
        <span class="font-weight-bold">VF</span>
        <span class="font-weight-thin">CMS</span>
      </v-toolbar-title>
</v-toolbar>
</template>

<script>
export default {
  methods: {
    openDrawer () {
      this.$emit('openIt')
    }
  }
}
</script>
