<template>
  <div class="default-layout">
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>

<script>
import { TheHeader, TheFooter } from '../components/sharedComponents'
export default {
  components: { TheHeader, TheFooter }
}
</script>

<style>
.default-layout {
  background-color: var(--v-primary-base);
}
</style>
