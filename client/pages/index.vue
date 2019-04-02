<template>
  <p class="headline ma-5">
    {{ $store.state.users.data }}
  </p>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>
