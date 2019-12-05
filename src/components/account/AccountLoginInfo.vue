<template>
  <v-container fluid="">
    <v-row align="center" justify="center">
      <v-col cols="12" md="4">
        <BaseCard>
          <v-container fluid>
            <v-row align="start" justify="center">
              <v-col cols="12">
                <AccountSocialLogin />
              </v-col>
            </v-row>
          </v-container>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { BaseCard } from '../baseComponents'
import AccountSocialLogin from './AccountSocialLogin'

export default {
  name: 'ThePricingInfo',
  components: { BaseCard, AccountSocialLogin }
}
</script>
