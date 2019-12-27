<template>
  <v-container fluid class="white--text">
    <v-row>
      <v-col cols="12">
        <BaseText class="display-2">Password changed</BaseText>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <BaseCard>
          <v-container fluid>
            <v-row align="start" justify="center">
              <v-col cols="12">
                <BaseText class="subtitle-2">Ready to start</BaseText>
                <BaseButton text to="/account-login">Log In </BaseButton>
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
export default {
  name: 'AccountChangedPasswordInfo',
  components: { BaseCard, BaseText, BaseButton }
}
</script>
