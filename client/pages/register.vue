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
              v-model="name"
              :rules="nameRules"
              :counter="10"
              label="Username"
              prepend-icon="face"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              prepend-icon="email"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Password"
              prepend-icon="lock"
              required
            ></v-text-field>
          </v-form>
          <v-btn to="/login" block color="blue" dark>Register</v-btn>
          <div class="caption">already had an account?
            <nuxt-link to="/login">login then</nuxt-link>
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
    email: '',
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length >= 6 || 'Password must be greater than 6 characters'
    ],
    nameRules: [
      v => !!v || 'Password is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  })
}
</script>