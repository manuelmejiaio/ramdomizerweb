<template>
  <v-container fluid class="white--text">
    <v-row>
      <v-col cols="12">
        <BaseText class="display-2">Account</BaseText>
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
                  <BaseButton class="mb-5" block x-large color="success" :loading="loading" @click="saveAccount">
                    Save
                  </BaseButton>
                  <BaseButton class="float-left" text small to="/account-change-password">
                    Change Password
                  </BaseButton>
                  <BaseButton class="float-right" text small to="/account-delete">
                    Delete Account
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
import { authHeader } from '../../helpers/authHeader'
export default {
  name: 'AccountLoginForm',
  components: { BaseCard, BaseText, BaseForm, BaseTextField, BaseButton },
  mixins: [validationMixin],
  validations: {
    name: { required },
    email: { required, email }
  },
  data() {
    return {
      name: this.$store.state.user.name,
      email: this.$store.state.user.email,
      loading: false,
      serverErrors: ''
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
    }
  },
  methods: {
    saveAccount() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.loading = true
        axios
          .put(
            `${process.env.VUE_APP_API_BASE_URL}/api/v1.0/accounts/update`,
            {
              Name: this.name,
              Email: this.email
            },
            authHeader(this.$store.state.user.token)
          )
          .then(response => {
            if (response.data.isEmailChanged) {
              this.$store.commit('Logout')
              this.$router.push('/account-unverified')
            } else {
              this.loading = false
              this.$store.commit('Update', { name: this.name })
              this.$store.commit('SetSnack', 'Account saved')
            }
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
