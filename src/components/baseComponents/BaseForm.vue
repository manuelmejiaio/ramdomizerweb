<template>
  <v-form v-bind="$attrs" v-on="$listeners"><slot /></v-form>
</template>
<script>
export default {
  name: 'BaseForm'
}
</script>
