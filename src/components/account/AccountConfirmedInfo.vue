<template>
  <v-container fluid class="white--text">
    <v-row>
      <v-col cols="12">
        <BaseText class="display-2">Confirmed Account</BaseText>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" md="3">
        <BaseCard>
          <v-container fluid>
            <v-row align="start" justify="center">
              <v-col cols="12">
                <BaseText class="subtitle-2">Thanks, your email have been confirmed.</BaseText>
                <BaseButton block x-large color="success" to="/giveaway-list">Continue</BaseButton>
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
let url = new URL(window.location.href)
let searchParams = new URLSearchParams(url.search)
let userId = searchParams.get('userId')
let name = searchParams.get('name')
let userEmail = searchParams.get('userEmail')
let token = searchParams.get('token')
let plan = searchParams.get('plan')
export default {
  name: 'AccountForgotPasswordEmailSentInfo',
  components: { BaseCard, BaseText, BaseButton },
  created() {
    this.$store.commit('Login', { userId: userId, name: name, userEmail: userEmail, token: token, plan: plan })
  }
}
</script>
