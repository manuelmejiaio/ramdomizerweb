<template>
  <v-textarea v-bind="$attrs" outlined v-on="$listeners">
    <!-- Pass on all named slots -->
    <slot v-for="slot in Object.keys($slots)" :slot="slot" :name="slot" />

    <!-- Pass on all scoped slots -->
    <template v-for="slot in Object.keys($scopedSlots)" :slot="slot" slot-scope="scope"
      ><slot :name="slot" v-bind="scope"
    /></template>
  </v-textarea>
</template>

<script>
export default {
  name: 'BaseTextarea'
}
</script>
