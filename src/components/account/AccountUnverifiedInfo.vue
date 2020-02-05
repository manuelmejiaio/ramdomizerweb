<template>
  <v-container fluid class="white--text">
    <v-row>
      <v-col cols="12">
        <BaseText class="display-2">Check your email</BaseText>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" md="3">
        <BaseCard>
          <v-container fluid>
            <v-row align="start" justify="center">
              <v-col cols="12">
                <BaseIcon name="email" x-large />
                <BaseText class="subtitle-2">Please verify your email to activate your account.</BaseText>
              </v-col>
            </v-row>
          </v-container>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { BaseCard, BaseText, BaseIcon } from '../baseComponents'
export default {
  name: 'AccountUnverifiedInfo',
  components: { BaseCard, BaseText, BaseIcon }
}
</script>
