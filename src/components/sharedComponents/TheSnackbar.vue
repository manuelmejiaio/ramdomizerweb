<template>
  <v-snackbar v-model="show">
    {{ message }}
    <v-btn text color="grey" @click.native="show = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: 'TheSnackbar',
  data() {
    return {
      show: false,
      message: ''
    }
  },
  created: function() {
    this.$store.watch(
      state => state.snack,
      () => {
        const msg = this.$store.state.snack
        if (msg !== '') {
          this.show = true
          this.message = this.$store.state.snack
          this.$store.commit('SetSnack', '')
        }
      }
    )
  }
}
</script>
