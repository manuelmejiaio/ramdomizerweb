<template>
  <div class="comboboxklk">
    <v-combobox v-model="inputValue" :items="items" chips clearable :label="label" multiple outlined>
      <template v-slot:selection="{ attrs, item, select, selected }">
        <v-chip v-bind="attrs" :input-value="selected" close @click="select" @click:close="remove(item)">
          <strong>{{ item }}</strong>
        </v-chip>
      </template>
    </v-combobox>
  </div>
</template>

<script>
export default {
  name: 'BaseComboBox',
  props: {
    value: { type: Array, default: () => [] },
    items: { type: Array, default: () => [] },
    label: { type: String, default: 'Select' }
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    remove(item) {
      this.inputValue.splice(this.inputValue.indexOf(item), 1)
      this.inputValue = [...this.inputValue]
    }
  }
}
</script>
