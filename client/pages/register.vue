<template>
  <v-card class="pb-3 elevation-12">
    <v-card-title primary-title>
      <p class="title">
        REGISTER ⭕
      </p>
    </v-card-title>
    <div class="mx-3">
      <v-form class="mt-2">
        <v-text-field label="Email" placeholder="jhon@doe.com" />
        <v-text-field
          label="Password"
          placeholder="your easy password"
          type="password"
        />
        <v-text-field
          label="Confirm password"
          placeholder="make it same as above password"
          type="password"
        />
        <registerButton class="mt-2" text="register" />
        <p class="caption mt-2">
          login
          <nuxt-link to="/login">
            here
          </nuxt-link>
          if you had an account
        </p>
      </v-form>
    </div>
  </v-card>
</template>

<script>
import registerButton from '../components/commons/def-button'

export default {
  layout: 'unautorize',
  components: {
    registerButton
  },
  mounted() {
    this.$axios
      .get('/role/menu')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
}
</script>
