<template>
  <v-container fluid class="white--text">
    <v-row>
      <v-col cols="12">
        <BaseText class="display-2">Signup</BaseText>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" md="4">
        <BaseCard>
          <v-container fluid>
            <v-row no-gutters align="start" justify="center">
              <v-col cols="12">
                <BaseText v-for="error in serverErrors" :key="error" class="caption error--text">{{ error }}</BaseText>
              </v-col>
            </v-row>
            <v-row no-gutters align="start" justify="center">
              <v-col cols="12">
                <AccountSocialLogin />
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12">
                <BaseForm>
                  <BaseTextField v-model="name" label="Name" :error-messages="nameErrors" @blur="$v.name.$touch()" />
                  <BaseTextField
                    v-model="email"
                    label="Email"
                    :error-messages="emailErrors"
                    @blur="$v.email.$touch()"
                  />
                  <BaseTextField
                    v-model="password"
                    type="password"
                    label="Password"
                    :error-messages="passwordErrors"
                    @blur="$v.password.$touch()"
                  />
                  <BaseButton block x-large color="success" :loading="loading" @click="executeRecaptcha"
                    >Sign Up</BaseButton
                  >
                  <VueRecaptcha
                    ref="recaptcha"
                    size="invisible"
                    :sitekey="sitekey"
                    @verify="signUp"
                    @expired="onCaptchaExpired"
                  />
                </BaseForm>
              </v-col>
            </v-row>
          </v-container>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { BaseCard, BaseText, BaseForm, BaseTextField, BaseButton } from '../baseComponents'
import AccountSocialLogin from './AccountSocialLogin'
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import axios from 'axios'
import VueRecaptcha from 'vue-recaptcha'
export default {
  name: 'AccountSignupForm',
  components: { BaseCard, BaseText, BaseForm, BaseTextField, BaseButton, AccountSocialLogin, VueRecaptcha },
  mixins: [validationMixin],
  validations: {
    name: { required },
    email: { required, email },
    password: { required }
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      loading: false,
      serverErrors: '',
      sitekey: process.env.VUE_APP_GOOGLE_RECAPTCHA_SITEKEY
    }
  },
  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.required && errors.push('Name is required')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required')
      return errors
    }
  },
  mounted() {
    // Google reCAPTCHA
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute(
      'src',
      'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit'
    )
    document.head.appendChild(recaptchaScript)
  },
  methods: {
    executeRecaptcha() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.loading = true
        this.$refs.recaptcha.execute()
      }
    },
    onCaptchaExpired() {
      this.$refs.recaptcha.reset() // Direct call reset method
    },
    signUp(recaptchaToken) {
      const self = this
      self.$refs.recaptcha.reset()
      axios
        .post(`${process.env.VUE_APP_API_BASE_URL}/api/v1.0/accounts/register`, {
          Name: this.name,
          Email: this.email,
          Password: this.password,
          RecaptchaToken: recaptchaToken
        })
        .then(response => {
          const user = {
            userId: response.data.userId,
            name: response.data.name,
            userEmail: this.email,
            token: response.data.token,
            plan: response.data.plan
          }
          this.$store.commit('Login', user)
          this.$router.push('/giveaway-list')
        })
        .catch(error => {
          this.loading = false
          let serverErrorArray = []
          for (var key in error.response.data.errors) {
            serverErrorArray.push(error.response.data.errors[key])
          }
          this.serverErrors = serverErrorArray
        })
    }
  }
}
</script>
