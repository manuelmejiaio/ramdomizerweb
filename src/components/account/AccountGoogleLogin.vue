<template>
  <BaseButton
    v-google-signin-button="clientId"
    :loading="loading"
    color="red"
    dark
    block
    x-large
    class="google-login-button"
  >
    <BaseIcon large class="mr-2" name="google" /> Continue with Google
  </BaseButton>
</template>

<script>
import { BaseButton, BaseIcon } from '../baseComponents'
import GoogleSignInButton from 'vue-google-signin-button-directive'
import axios from 'axios'
export default {
  name: 'AccountGoogleSignin',
  components: { BaseButton, BaseIcon },
  directives: {
    GoogleSignInButton
  },
  data() {
    return {
      loading: false,
      clientId: '972296239509-jk08l4kpejq72tf9estt2bmrphenua3v.apps.googleusercontent.com'
    }
  },
  methods: {
    OnGoogleAuthSuccess(idToken) {
      this.loading = true
      axios
        .post(
          `${process.env.VUE_APP_API_BASE_URL}/api/v1.0/accounts/googlesignin`,
          { IdToken: idToken },
          { withCredentials: true }
        )
        .then(response => {
          const user = {
            userId: response.data.userId,
            name: response.data.name,
            userEmail: response.data.email,
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
          console.log(serverErrorArray)
          this.$store.commit('SetSnack', 'Contact us if you have problem to continue with Google.')
        })
    },
    OnGoogleAuthFail(error) {
      console.log(error)
    }
  }
}
</script>

<style>
.google-login-button {
  height: 50px;
  text-transform: none !important;
  letter-spacing: 0.21px;
  font-size: 16px;
}
</style>
