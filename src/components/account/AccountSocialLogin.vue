<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <AccountGoogleLogin />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <AccountFacebookLogin />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="separator">
          <span class="separator-text"><BaseText class="subtitle-2">OR </BaseText></span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { BaseText } from '../baseComponents'
import AccountGoogleLogin from './AccountGoogleLogin'
import AccountFacebookLogin from './AccountFacebookLogin'
export default {
  components: {
    BaseText,
    AccountGoogleLogin,
    AccountFacebookLogin
  }
}
</script>

<style>
.separator {
  margin: 20px 0;
  border-top: 1px solid #cccccc;
  position: relative;
}

.separator-text {
  display: block;
  position: absolute;
  top: -11px;
  left: 50%;
  margin-left: -22px;
  padding: 0px 10px;
  background: #ffffff;
}
</style>
