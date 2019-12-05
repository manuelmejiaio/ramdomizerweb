<template>
  <v-img :src="src" :alt="alt" />
</template>
<script>
export default {
  name: 'BaseImage',
  props: {
    src: { type: String, default: '', required: true },
    alt: { type: String, default: '', required: true }
  }
}
</script>
