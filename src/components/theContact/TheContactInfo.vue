<template>
  <v-container fluid class="white--text">
    <v-row>
      <v-col cols="12">
        <BaseText class="display-2">Contact</BaseText>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" md="4">
        <BaseCard class="contact-base-card">
          <v-container fluid>
            <v-row align="start" justify="center">
              <v-col cols="12">
                <iframe
                  class="contact-iframe"
                  src="https://app.purechat.com/w/RAMdomizer"
                  allow="autoplay"
                  allowfullscreen
                ></iframe>
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
  name: 'TheContactInfo',
  components: { BaseCard, BaseText }
}
</script>

<style>
.contact-base-card {
  position: relative;
  overflow: hidden;
  padding-top: 135.25%;
  border-radius: 15px 50px 30px 5px;
  border: 2px solid #f68b1f;
}

.contact-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
