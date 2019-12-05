<template>
  <!-- Material Design Icons https://materialdesignicons.com -->
  <v-icon v-bind="$attrs" v-on="$listeners">
    {{ `mdi-${name}` }}
  </v-icon>
</template>
<script>
export default {
  name: 'BaseIcon',
  props: {
    name: { type: String, default: '' }
  }
}
</script>
