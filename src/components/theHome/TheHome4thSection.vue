<template>
  <v-container fluid class="features-background white--text">
    <v-row>
      <v-col cols="12">
        <BaseText class="display-2">Features</BaseText>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="feature in features" :key="feature.name" cols="12" md="3">
        <BaseIcon :name="feature.icon" x-large color="secondary" />
        <BaseText class="display-1 mb-5"> {{ feature.name }} </BaseText>
        <BaseText class="headline"> {{ feature.description }}</BaseText>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { BaseIcon, BaseText } from '../baseComponents'
export default {
  name: 'TheHome4thSection',
  components: { BaseIcon, BaseText },
  data() {
    return {
      features: [
        {
          icon: 'gesture-tap',
          name: 'Easy',
          description: 'The simplest giveaway tool, even your grandma can create a giveaway with us.'
        },
        {
          icon: 'account-multiple',
          name: 'Social',
          description: 'Get known and grow your business. Spread through all your social networks and platforms.'
        },
        {
          icon: 'trending-up',
          name: 'Flexible',
          description: 'The size does not matter, from the smallest to the biggest giveaway, we can handle it.'
        },
        {
          icon: 'settings',
          name: 'Automatic',
          description: 'The winners are chosen randomly from the participant list and get notified.'
        }
      ]
    }
  }
}
</script>

<style>
.features-background {
  min-height: 700px;
  background: url('../../assets/images/home/features-background.png') no-repeat;
  background-position: center;
  background-size: cover;
}

@media only screen and (max-width: 960px) {
  .features-background {
    background: none;
  }
}
</style>
