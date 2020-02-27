<template>
  <div>
    <v-file-input
      v-model="inputValue"
      label="Add image"
      accept="image/*"
      outlined
      prepend-icon=""
      append-icon="mdi-camera"
    />
    <BaseDialog v-model="dialog" max-width="780px">
      <BaseCard>
        <cropper
          ref="cropper"
          classname="cropper"
          :src="img64"
          :stencil-props="{
            aspectRatio: 18 / 10
          }"
        />
        <v-card-actions>
          <v-spacer></v-spacer>
          <BaseButton text @click="dialog = false">Close</BaseButton>
          <BaseButton text @click="crop">Save</BaseButton>
        </v-card-actions>
      </BaseCard>
    </BaseDialog>
  </div>
</template>

<script>
import BaseDialog from './BaseDialog'
import BaseCard from './BaseCard'
import BaseButton from './BaseButton'
import { Cropper } from 'vue-advanced-cropper'
export default {
  name: 'BaseImageUploader',
  components: { Cropper, BaseDialog, BaseCard, BaseButton },
  props: {
    value: { type: [File, String], default: null }
  },
  data() {
    return {
      dialog: false,
      img64: null
    }
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
  watch: {
    inputValue(val) {
      // check if it's a file
      if (val instanceof Blob) {
        this.getBase64(val)
        this.dialog = true
      }
    }
  },

  methods: {
    getBase64(file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.img64 = reader.result
      }
      reader.onerror = error => console.log(error)
    },
    crop() {
      this.dialog = false
      const { coordinates, canvas } = this.$refs.cropper.getResult()
      this.coordinates = coordinates
      // You able to do different manipulations at a canvas
      // but there we just get a cropped image
      this.$emit('success', canvas.toDataURL())
    }
  }
}
</script>

<style lang="scss" scoped>
.cropper {
  height: 400px;
  background: #ddd;
}
</style>
