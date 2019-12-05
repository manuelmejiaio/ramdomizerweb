<template>
  <div>
    <TheHome1stSection />
    <TheHome2ndSection />
    <TheHome3rdSection />
    <TheHome4thSection />
  </div>
</template>

<script>
// @ is an alias to /src
import { TheHome1stSection, TheHome2ndSection, TheHome3rdSection, TheHome4thSection } from '@/components/theHome'
export default {
  name: 'TheHome',
  components: {
    TheHome1stSection,
    TheHome2ndSection,
    TheHome3rdSection,
    TheHome4thSection
  }
}
</script>
