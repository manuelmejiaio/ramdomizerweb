<template>
  <v-text-field v-bind="$attrs" outlined v-on="$listeners">
    <!-- Pass on all named slots -->
    <slot v-for="slot in Object.keys($slots)" :slot="slot" :name="slot" />

    <!-- Pass on all scoped slots -->
    <template v-for="slot in Object.keys($scopedSlots)" :slot="slot" slot-scope="scope"
      ><slot :name="slot" v-bind="scope"
    /></template>
  </v-text-field>
</template>

<script>
export default {
  name: 'BaseTextField'
}
</script>
