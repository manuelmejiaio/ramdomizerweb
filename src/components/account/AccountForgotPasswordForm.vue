<template>
  <v-container fluid class="white--text">
    <v-row>
      <v-col cols="12">
        <BaseText class="display-2">Forgot your Password?</BaseText>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <BaseText class="title">Enter your email, we will send you the Password Reset Link</BaseText>
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
                    v-model="email"
                    label="Email"
                    :error-messages="emailErrors"
                    @blur="$v.email.$touch()"
                  />
                  <BaseButton block color="success" :loading="loading" @click="sendLink">
                    Send Link
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
import { required, email } from 'vuelidate/lib/validators'
import axios from 'axios'
export default {
  name: 'AccountForgotPasswordForm',
  components: { BaseCard, BaseText, BaseForm, BaseTextField, BaseButton },
  mixins: [validationMixin],
  validations: {
    email: { required, email }
  },
  data() {
    return {
      email: '',
      loading: false,
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
    }
  },
  methods: {
    sendLink() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.loading = true
        axios
          .post(`${process.env.VUE_APP_API_BASE_URL}/api/v1.0/accounts/forgotPassword`, {
            Email: this.email
          })
          .then(response => {
            this.$router.push('/account-forgot-password-email-sent')
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
