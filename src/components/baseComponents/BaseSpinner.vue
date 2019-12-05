<template>
  <v-progress-circular v-bind="$attrs" indeterminate v-on="$listeners"></v-progress-circular>
</template>
<script>
export default {
  name: 'BaseSpinner'
}
</script>
