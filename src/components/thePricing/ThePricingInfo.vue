<template>
  <v-container fluid class="white--text">
    <v-row>
      <v-col cols="12">
        <BaseText class="display-2">Pricing</BaseText>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <BaseText class="title">Compare us with other services, unbeatable 💪</BaseText>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" md="4">
        <BaseCard title="Free plan">
          <v-container fluid>
            <v-row align="start" justify="center">
              <v-col cols="12">
                <BaseText class="display-1">$0.00</BaseText>
                <BaseText class="subtitle-1 mb-5">Free forever</BaseText>
                <BaseButton class="mb-5" color="success" block x-large to="/signup">Select Plan</BaseButton>
                <BaseText v-for="feature in features" :key="feature.description" class="subtitle-1 text-md-left pa-1">
                  - {{ feature.description }}
                </BaseText>
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
  name: 'ThePricingInfo',
  components: { BaseCard, BaseText, BaseButton },
  data() {
    return {
      features: [
        { description: 'Unlimited giveaways' },
        { description: 'Unlimited participants' },
        { description: 'Up to 250 winner per giveaway' },
        { description: 'Unlimited custom survey fields' },
        { description: 'Filter participants by countries' },
        { description: 'Prize image storage time: Forever' },
        { description: 'Participants’ geo-location information' },
        { description: 'Downloadable participants data (Excel File)' },
        { description: 'Email notifications (for you and the winners)' }
      ]
    }
  }
}
</script>
