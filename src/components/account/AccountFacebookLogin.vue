<template>
  <BaseButton v-facebook-signin-button="appId" color="blue darken-3" dark block large class="facebook-login-button">
    <BaseIcon large class="mr-2" name="facebook" /> Continue with Google
  </BaseButton>
</template>

<script>
import { BaseButton, BaseIcon } from '../baseComponents'
import FacebookSignInButton from 'vue-facebook-signin-button-directive'
import axios from 'axios'
export default {
  name: 'AccountFacebookLogin',
  components: { BaseButton, BaseIcon },
  directives: {
    FacebookSignInButton
  },
  data: () => ({
    circularProgress: false,
    appId: '2222562791363871'
  }),
  methods: {
    OnFacebookAuthSuccess(idToken) {
      this.circularProgress = true
      axios
        .post(
          `${process.env.HOST_URL}/api/v1.0/accounts/facebooksignin`,
          { AccessToken: idToken },
          { withCredentials: true }
        )
        .then(response => {
          // const user = {
          //   userId: response.data.userId,
          //   name: response.data.name,
          //   userEmail: response.data.email,
          //   token: response.data.token,
          //   plan: response.data.plan
          // }
          // redirect user if everything works
        })
        .catch(error => {
          this.circularProgress = false
          let serverErrorArray = []
          for (var key in error.response.data.errors) {
            serverErrorArray.push(error.response.data.errors[key])
          }
          console.log(serverErrorArray)
          this.$store.commit('SetSnack', 'Contact us if you have problem to continue with Facebook.')
        })
    },
    OnFacebookAuthFail(error) {
      console.log(error)
    }
  }
}
</script>

<style>
.facebook-login-button {
  height: 50px;
  text-transform: none !important;
  letter-spacing: 0.21px;
  font-size: 16px;
}
</style>
