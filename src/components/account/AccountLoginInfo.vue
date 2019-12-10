<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="3">
        <BaseCard>
          <v-container fluid>
            <v-row no-gutters align="start" justify="center">
              <v-col cols="12">
                <BaseText v-for="error in serverErrors" :key="error" class="caption">{{ error }}</BaseText>
              </v-col>
            </v-row>
            <v-row no-gutters align="start" justify="center">
              <v-col cols="12">
                <AccountSocialLogin />
              </v-col>
            </v-row>
            <v-row no-gutters align="start" justify="center">
              <v-col cols="12">
                <BaseForm>
                  <BaseTextField
                    v-model="email"
                    :error-messages="emailErrors"
                    label="Email"
                    required
                    @blur="$v.email.$touch()"
                  />
                  <BaseTextField
                    v-model="password"
                    :error-messages="passwordErrors"
                    label="Password"
                    required
                    @blur="$v.password.$touch()"
                  />
                  <BaseButton block color="success" @click="logIn">Log In</BaseButton>
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
export default {
  name: 'ThePricingInfo',
  components: { BaseCard, BaseText, AccountSocialLogin, BaseForm, BaseTextField, BaseButton },
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: { required }
  },
  data() {
    return {
      email: '',
      password: '',
      serverErrors: ''
    }
  },
  computed: {
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
  methods: {
    logIn() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        // this.circularProgress = true
        axios
          .post(
            `${process.env.HOST_URL}/api/v1.0/accounts/login`,
            {
              Email: this.email,
              Password: this.password,
              RememberMe: true
            },
            { withCredentials: true }
          )
          .then(response => {
            const user = {
              userId: response.data.userId,
              name: response.data.name,
              userEmail: this.email,
              token: response.data.token,
              plan: response.data.plan
            }
            this.Login_Mix(user)
          })
          .catch(error => {
            this.circularProgress = false
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
