<template>
  <v-layout align-center justify-center>
    <v-flex id="login" class="text-xs-center" md6 lg4>
      <div class="display-1 mb-3">
        <v-icon class="mr-2" color="blue" large>play_circle_filled</v-icon>VF-CMS
      </div>
      <v-card>
        <v-card-text>
          <v-form v-model="valid" class="mb-4">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              prepend-icon="email"
              required
            ></v-text-field>
            <v-text-field
              v-model="name"
              :rules="nameRules"
              :counter="10"
              label="Password"
              prepend-icon="lock"
              required
            ></v-text-field>
          </v-form>
          <v-btn to="/" block color="blue" dark>Sign In</v-btn>
          <div class="caption">dont had an account?
            <nuxt-link to="/register">register then</nuxt-link>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  layout: 'narrow',
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      v => !!v || 'Password is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  })
}
</script>