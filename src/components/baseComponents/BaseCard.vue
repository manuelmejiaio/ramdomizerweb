<template>
  <v-card class="base-card" v-bind="$attrs" v-on="$listeners">
    <div v-if="title" class="secondary white--text">
      <BaseText class="display-1 px-4 py-2">{{ title }}</BaseText>
    </div>
    <slot />
  </v-card>
</template>

<script>
import BaseText from './BaseText'
export default {
  name: 'BaseCard',
  components: { BaseText },
  props: {
    title: { type: String, default: '' }
  }
}
</script>

<style scoped>
.base-card {
  border-radius: 15px 50px 30px 5px !important;
  border: 2px solid var(--v-secondary-base) !important;
}
</style>
