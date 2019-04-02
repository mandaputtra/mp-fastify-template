<template>
  <v-card class="pb-3 elevation-12">
    <v-card-title primary-title>
      <p class="title mb-0">
        REGISTER ⭕
      </p>
    </v-card-title>
    <v-sheet
      v-if="errorServer"
      color="red"
      height="20"
      class="mx-3 pl-2 white--text"
    >
      {{ errorServer }}
    </v-sheet>
    <div class="mx-3">
      <v-form class="mt-2">
        <v-text-field
          v-model="email"
          class="mb-3"
          label="Email"
          placeholder="jhon@doe.com"
          :error-messages="emailError"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        />
        <v-text-field
          v-model="password"
          class="mb-3"
          label="Password"
          :error-messages="passwordError"
          placeholder="your easy password"
          type="password"
          required
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        />
        <v-text-field
          v-model="passwordConfirm"
          class="mb-3"
          label="Password"
          :error-messages="passwordConfirmError"
          placeholder="your easy password"
          type="password"
          required
          @input="$v.passwordConfirm.$touch()"
          @blur="$v.passwordConfirm.$touch()"
        />
        <registerButton class="mt-2" text="register" @action="register" />
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
import { validationMixin } from 'vuelidate'
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  layout: 'unautorize',
  components: {
    registerButton
  },
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(8) },
    passwordConfirm: { required, minLength: minLength(8) }
  },
  data: () => {
    return {
      email: '',
      password: '',
      passwordConfirm: '',
      errorServer: ''
    }
  },
  computed: {
    emailError() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Please input valid email address.')
      !this.$v.email.required && errors.push('Email is required.')
      return errors
    },
    passwordError() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.minLength &&
        errors.push('Password minimal 8 characters long.')
      !this.$v.password.required && errors.push('Password is required.')
      return errors
    },
    passwordConfirmError() {
      const errors = []
      if (!this.$v.passwordConfirm.$dirty) return errors
      !this.$v.passwordConfirm.minLength &&
        errors.push('Password minimal 8 characters long.')
      !this.$v.passwordConfirm.required && errors.push('Password is required.')
      this.$v.passwordConfirm.$model != this.$v.password.$model &&
        errors.push('Password not match!')
      return errors
    }
  },
  methods: {
    async register() {
      this.$v.$touch()
      if (!this.$v.$error) {
        try {
          const user = await this.$axios.post('/register', {
            email: this.email,
            password: this.password
          })
          const response = user.data.data
          if (user.status === 226) {
            this.errorServer = response.message
          } else {
            this.$store
              .dispatch('users/addUserData', response)
              .then(() => this.$router.push('/'))
          }
        } catch (error) {
          this.errorServer = error
        }
      }
    }
  }
}
</script>
