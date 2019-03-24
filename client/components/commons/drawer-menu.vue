<template>
  <v-navigation-drawer
    :value="show"
    absolute
    left
    temporary
    @input="$emit('close', $event)"
  />
</template>

<script>
export default {
  props: {
    show: { type: Boolean, default: false }
  }
}
</script>
