<template>
  <v-container fluid class="white--text home-1st-section">
    <v-row align="center" justify="center">
      <v-col cols="12" md="5">
        <v-row>
          <v-col cols="12">
            <BaseText class="display-1">Create giveaways to</BaseText>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <BaseText class="display-3 font-weight-black">{{ currentGiveawayToMessage }}</BaseText>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col v-for="step in steps" :key="step.name" cols="3">
            <BaseIcon color="white" :name="step.icon" x-large />
            <BaseText :class="[$vuetify.breakpoint.xs ? 'caption' : 'title']">{{ step.name }}</BaseText>
            <BaseText :class="['display-1']">{{ step.number }}</BaseText>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <BaseButton class="display-1 elevation-16" rounded x-large color="success" to="/signup">
              Get Started Free
            </BaseButton>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4">
        <BaseImage :src="require('@/assets/images/home/ramdomizer-giveaway-examples.png')" alt="ramdomizer-giveaways" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { BaseText, BaseImage, BaseIcon, BaseButton } from '../baseComponents'
export default {
  name: 'TheHome1stSection',
  components: { BaseText, BaseImage, BaseIcon, BaseButton },
  data() {
    return {
      steps: [
        { number: '➊', name: 'Set Date', icon: 'calendar-clock' },
        { number: '➋', name: 'Add Prizes', icon: 'gift-outline' },
        { number: '➌', name: 'Share Link', icon: 'share-variant' }
      ],
      currentGiveawayToMessage: 'Capture Information'
    }
  },
  mounted() {
    this.getGiveawayToMessages()
  },
  methods: {
    getGiveawayToMessages() {
      const messages = ['Create Awareness', 'Increase Engagement', 'Capture Information']
      let index = 0
      setInterval(() => {
        if (index === messages.length) {
          index = 0
        }
        this.currentGiveawayToMessage = messages[index]
        index++
      }, 1500)
    }
  }
}
</script>

<style>
.home-1st-section {
  min-height: 800px;
  background: url('../../assets/images/home/ramdomizer-background.png') no-repeat;
  background-position: center;
  background-size: cover;
}

@media only screen and (max-width: 600px) {
  .home-1st-section {
    min-height: 400px;
  }
}
</style>
