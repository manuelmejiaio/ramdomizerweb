<template>
  <v-container fluid class="white--text">
    <v-row>
      <v-col cols="12">
        <BaseText class="display-2">Reset Password</BaseText>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" md="3">
        <BaseCard>
          <v-container fluid>
            <v-row no-gutters align="start" justify="center">
              <v-col cols="12">
                <BaseText v-for="error in serverErrors" :key="error" class="caption">{{ error }}</BaseText>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <BaseForm>
                  <BaseTextField
                    v-model="password"
                    label="Email"
                    :error-messages="passwordErrors"
                    @blur="$v.password.$touch()"
                  />
                  <BaseButton block color="success" :loading="loading" @click="resetPassword">
                    Reset
                  </BaseButton>
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
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'
import axios from 'axios'
const url = new URL(window.location.href)
const searchParams = new URLSearchParams(url.search)
const code = searchParams.get('code')
const email = searchParams.get('email')
export default {
  name: 'AccountForgotPasswordForm',
  components: { BaseCard, BaseText, BaseForm, BaseTextField, BaseButton },
  mixins: [validationMixin],
  validations: {
    password: { required, minLength: minLength(6) }
  },
  data() {
    return {
      password: '',
      loading: false,
      serverErrors: ''
    }
  },
  computed: {
    passwordErrors() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required')
      !this.$v.password.minLength &&
        errors.push(`Password must have at least ${this.$v.name.$params.minLength.min} characters`)
      return errors
    }
  },
  methods: {
    resetPassword() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.loading = true
        axios
          .put(`${process.env.VUE_APP_API_BASE_URL}/api/v1.0/accounts/ResetPassword`, {
            Email: email,
            Password: this.password,
            Code: code
          })
          .then(response => {
            this.$router.push('/account-change-password-confirmation')
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
}
</script>
