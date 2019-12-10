<template>
  <v-app id="app">
    <component :is="layout">
      <v-content class="app-content">
        <router-view />
      </v-content>
    </component>
  </v-app>
</template>

<script>
const defaultlayout = 'default'
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultlayout) + '-layout'
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:500&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-content {
  min-height: 975px;
}
</style>
