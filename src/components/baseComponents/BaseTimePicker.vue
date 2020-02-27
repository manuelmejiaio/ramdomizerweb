<template>
  <v-dialog v-model="modal" persistent width="290px">
    <template v-slot:activator="{ on }">
      <v-text-field v-model="fortmatedTime" :label="label" append-icon="access_time" readonly outlined v-on="on" />
    </template>
    <v-time-picker v-model="inputValue" ampm-in-title full-width />
  </v-dialog>
</template>
<script>
export default {
  name: 'BaseTimePicker',
  props: {
    value: { type: String, default: new Date().getHours() + ':' + new Date().getMinutes() },
    label: { type: String, default: 'Draw time' }
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
    },
    fortmatedTime() {
      // https://stackoverflow.com/a/54142884/2958543
      const timeString12hr = new Date('1970-01-01T' + this.inputValue + 'Z').toLocaleTimeString(
        {},
        { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
      )
      return timeString12hr
    }
  }
}
</script>
