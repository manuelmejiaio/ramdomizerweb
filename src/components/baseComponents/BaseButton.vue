<template>
  <v-btn v-bind="$attrs" v-on="$listeners"><slot /></v-btn>
</template>
<script>
export default {
  name: 'BaseButton'
}
</script>
