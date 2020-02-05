<template>
  <v-container fluid class="white--text">
    <v-row>
      <v-col cols="12">
        <BaseText class="display-2">Change Password</BaseText>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" md="3">
        <BaseCard>
          <v-container fluid>
            <v-row no-gutters align="start" justify="center">
              <v-col cols="12">
                <BaseText v-for="error in serverErrors" :key="error" class="caption error--text">{{ error }}</BaseText>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <BaseForm>
                  <BaseTextField
                    v-model="currentPassword"
                    type="password"
                    label="Current Password"
                    :error-messages="currentPasswordErrors"
                    @blur="$v.currentPassword.$touch()"
                  />
                  <BaseTextField
                    v-model="newPassword"
                    type="password"
                    label="New Password"
                    :error-messages="newPasswordErrors"
                    @blur="$v.newPassword.$touch()"
                  />
                  <BaseButton block x-large color="success" :loading="loading" @click="changePassword">
                    Save
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
import { authHeader } from '../../helpers/authHeader'
export default {
  name: 'AccountChangePasswordForm',
  components: { BaseCard, BaseText, BaseForm, BaseTextField, BaseButton },
  mixins: [validationMixin],
  validations: {
    currentPassword: { required },
    newPassword: { required, minLength: minLength(6) }
  },
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      loading: false,
      serverErrors: ''
    }
  },
  computed: {
    currentPasswordErrors() {
      const errors = []
      if (!this.$v.currentPassword.$dirty) return errors
      !this.$v.currentPassword.required && errors.push('Current password is required')
      return errors
    },
    newPasswordErrors() {
      const errors = []
      if (!this.$v.newPassword.$dirty) return errors
      !this.$v.newPassword.required && errors.push('New password is required')
      !this.$v.newPassword.minLength &&
        errors.push(`New password must have at least ${this.$v.newPassword.$params.minLength.min} characters`)
      return errors
    }
  },
  methods: {
    changePassword() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.loading = true
        axios
          .put(
            `${process.env.VUE_APP_API_BASE_URL}/api/v1.0/accounts/changePassword`,
            {
              CurrentPassword: this.currentPassword,
              NewPassword: this.newPassword
            },
            authHeader(this.$store.state.user.token)
          )
          .then(response => {
            this.$store.commit('Logout')
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
