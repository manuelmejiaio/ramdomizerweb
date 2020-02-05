<template>
  <div class="default-layout">
    <TheHeader />
    <slot />
    <TheFooter />
    <TheSnackbar />
  </div>
</template>

<script>
import { TheHeader, TheFooter, TheSnackbar } from '../components/sharedComponents'
export default {
  components: { TheHeader, TheFooter, TheSnackbar }
}
</script>

<style>
.default-layout {
  background-color: var(--v-primary-base);
}
</style>
