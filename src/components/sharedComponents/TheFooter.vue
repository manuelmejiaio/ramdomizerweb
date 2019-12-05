<template>
  <v-footer color="primary" class="white--text">
    <v-container fluid class="footer-border">
      <v-row>
        <v-col cols="12">
          <BaseText class="title">Follow Us</BaseText>
        </v-col>
      </v-row>
      <v-row class="mb-5" align="center" justify="center">
        <v-col v-for="channel in socialMediaChannels" :key="channel.icon" cols="1">
          <BaseButton text icon :href="channel.link" target="_blank">
            <BaseIcon :name="channel.icon" color="white" x-large />
          </BaseButton>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12">
          <BaseText class="body-1">© {{ year }} RAMdomizer.com</BaseText>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12">
          <BaseButton
            v-for="route in internalRoutes"
            :key="route.name"
            :to="route.path"
            class="caption"
            color="white"
            text
          >
            {{ route.name }}
          </BaseButton>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import { BaseText, BaseButton, BaseIcon } from '../baseComponents'
export default {
  name: 'TheFooter',
  components: { BaseText, BaseButton, BaseIcon },
  data() {
    return {
      year: new Date().getFullYear(),
      socialMediaChannels: [
        { icon: 'instagram', link: 'https://www.instagram.com/ramdomizerapp' },
        { icon: 'facebook-box', link: 'https://www.instagram.com/ramdomizerapp' },
        { icon: 'twitter-box', link: 'https://twitter.com/RamdomizerApp' }
      ],
      internalRoutes: [
        { name: 'Privacy', path: '/privacy' },
        { name: 'Terms', path: '/terms' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Contact', path: '/contact' }
      ]
    }
  }
}
</script>

<style>
.footer-border {
  border-top: 2px solid white;
  border-left: 8px solid white;
  border-radius: 30px;
}
</style>
