<template>
  <v-card class="pb-3 elevation-12">
    <v-card-title primary-title>
      <p class="title">
        LOGIN ⛺
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
        <loginBtn class="mt-2" text="login" @action="login" />
        <p class="caption mt-2">
          register
          <nuxt-link to="/register">
            here
          </nuxt-link>
          if you didn't had an account
        </p>
      </v-form>
    </div>
  </v-card>
</template>

<script>
import loginBtn from '../components/commons/def-button'

export default {
  layout: 'unautorize',
  components: {
    loginBtn
  },
  methods: {
    login() {
      this.$axios
        .post('/login', {
          email: 'hummbpa@mail.com',
          password: '1234567'
        })
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>
