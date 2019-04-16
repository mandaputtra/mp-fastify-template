<template>
  <p class="headline ma-5">
    {{ $store.state.users.data }}
    <v-btn>
      get
    </v-btn>
  </p>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>
