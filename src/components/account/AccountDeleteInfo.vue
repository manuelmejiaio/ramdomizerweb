<template>
  <v-container fluid class="white--text">
    <v-row>
      <v-col cols="12">
        <BaseText class="display-2">Delete Account</BaseText>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <BaseText class="title">Once you delete your account, there is no going back.</BaseText>
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
                <BaseButton block x-large color="success" :loading="loading" @click="deleteAccount">
                  Delete
                </BaseButton>
              </v-col>
            </v-row>
          </v-container>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { BaseCard, BaseText, BaseButton } from '../baseComponents'
import axios from 'axios'
import { authHeader } from '../../helpers/authHeader'
export default {
  name: 'AccountForgotPasswordForm',
  components: { BaseCard, BaseText, BaseButton },
  data() {
    return {
      loading: false,
      serverErrors: ''
    }
  },
  methods: {
    deleteAccount() {
      this.loading = true
      axios
        .put(
          `${process.env.VUE_APP_API_BASE_URL}/api/v1.0/accounts/delete`,
          null,
          authHeader(this.$store.state.user.token)
        )
        .then(response => {
          this.$store.commit('Logout')
          this.$router.push('/')
        })
        .catch(error => {
          if (error.response.status === 401) {
            this.$router.push('/Account/Login')
          }
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
