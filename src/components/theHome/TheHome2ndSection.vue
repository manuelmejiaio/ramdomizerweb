<template>
  <v-container fluid class="white--text">
    <v-row>
      <v-col cols="12"><BaseText class="headline">Create giveaways for your:</BaseText></v-col>
    </v-row>
    <v-row>
      <v-col v-for="channel in socialMediaChannels" :key="channel.name" cols="4" md="2">
        <BaseIcon class="white--text display-4" :name="channel.icon" />
        <BaseText :class="[$vuetify.breakpoint.xs ? 'title' : 'display-1']">
          {{ channel.name }}
        </BaseText>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { BaseText, BaseIcon } from '../baseComponents'
export default {
  name: 'TheHome2ndSection',
  components: { BaseText, BaseIcon },
  data() {
    return {
      socialMediaChannels: [
        { name: 'Youtube', icon: 'youtube' },
        { name: 'Instagram', icon: 'instagram' },
        { name: 'Facebook', icon: 'facebook-box' },
        { name: 'Snapchat', icon: 'snapchat' },
        { name: 'Twitter', icon: 'twitter-box' },
        { name: 'Website', icon: 'web' }
      ]
    }
  }
}
</script>
