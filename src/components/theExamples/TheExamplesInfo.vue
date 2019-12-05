<template>
  <v-container fluid class="white--text">
    <v-row>
      <v-col cols="12">
        <BaseText class="display-2">Examples</BaseText>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <BaseText class="title">Get inspired by these examples and start creating amazing giveaways. ✨</BaseText>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8">
        <BaseCard>
          <v-row align="start" justify="center">
            <v-col v-for="example in examples" :key="example.name" cols="7">
              <BaseCard class="elevation-12 mb-10">
                <BaseImage :src="example.src" :alt="example.name" />
              </BaseCard>
            </v-col>
          </v-row>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { BaseCard, BaseText, BaseImage } from '../baseComponents'
export default {
  name: 'TheExamplesInfo',
  components: { BaseCard, BaseText, BaseImage },
  data() {
    return {
      examples: [
        { name: 'iPhone-example', src: require('@/assets/images/examples/example-iphone.png') },
        { name: 'switch-example', src: require('@/assets/images/examples/example-switch.png') },
        { name: 'cruise-example', src: require('@/assets/images/examples/example-cruise.png') }
      ]
    }
  }
}
</script>
