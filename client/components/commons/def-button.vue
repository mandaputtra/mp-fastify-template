<template>
  <v-btn :block="block" :color="color" :dark="dark" :depressed="depressed">
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  name: 'DefButton',
  props: {
    text: { type: String, default: 'Not Specified' },
    block: { type: Boolean, default: true },
    depressed: { type: Boolean, default: true },
    dark: { type: Boolean, default: true },
    color: { type: String, default: 'blue' }
  }
}
</script>
