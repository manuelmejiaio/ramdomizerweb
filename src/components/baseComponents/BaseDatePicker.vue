<template>
  <v-dialog v-model="modal" persistent width="290px">
    <template v-slot:activator="{ on }">
      <v-text-field v-model="inputValue" :label="label" append-icon="event" readonly outlined v-on="on" />
    </template>
    <v-date-picker v-model="inputValue" scrollable />
  </v-dialog>
</template>
<script>
export default {
  name: 'BaseDatePicker',
  props: {
    value: { type: String, default: () => new Date().toISOString().substr(0, 10) },
    label: { type: String, default: 'Draw date' }
  },
  data() {
    return {
      modal: false
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(val) {
        this.modal = false
        this.$emit('input', val)
      }
    }
  }
}
</script>
