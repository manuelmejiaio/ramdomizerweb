<template>
  <v-container fluid class="white--text">
    <v-row>
      <v-col cols="12">
        <BaseText class="display-2">Check your email</BaseText>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <BaseCard>
          <v-container fluid>
            <v-row align="start" justify="center">
              <v-col cols="12">
                <BaseText class="subtitle-2">Please verify your email address to reset your your password.</BaseText>
                <BaseText class="caption">
                  If you don't see the email, check other places it might be, like your junk, spam, social, or other
                  folders.
                </BaseText>
              </v-col>
            </v-row>
          </v-container>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { BaseCard, BaseText } from '../baseComponents'
export default {
  name: 'AccountForgotPasswordEmailSentInfo',
  components: { BaseCard, BaseText }
}
</script>
