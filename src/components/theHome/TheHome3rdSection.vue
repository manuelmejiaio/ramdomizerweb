<template>
  <v-container fluid class="home-3rd-section">
    <v-row>
      <v-col cols="12" md="6" class="elevation-1">
        <v-row align="center" justify="center">
          <v-col cols="4">
            <BaseImage
              :src="require('@/assets/images/home/run-giveaways-promotion.png')"
              alt="run-giveaways-promotion"
            />
          </v-col>
          <v-col cols="6">
            <BaseText class="display-2">Run Giveaways</BaseText>
            <BaseText class="title">
              It’s the easier and funnier way to reach more people to grow your business audience.
            </BaseText>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" class="elevation-1">
        <v-row align="center" justify="center">
          <v-col cols="4">
            <BaseImage
              :src="require('@/assets/images/home/email-capture-promotion.png')"
              alt="email-capture-promotion"
            />
          </v-col>
          <v-col cols="6">
            <BaseText class="display-2">Email Capture</BaseText>
            <BaseText class="title">
              With us you can create your Email List to target the right audience for your promotions.
            </BaseText>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { BaseImage, BaseText } from '../baseComponents'
export default {
  name: 'TheHome3rdSection',
  components: { BaseImage, BaseText }
}
</script>

<style>
.home-3rd-section {
  background-color: white;
}
</style>
