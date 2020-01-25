<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <have-you-seen-this-wizard/>
  </div>
</template>

<script>
import HaveYouSeenThisWizard from './components/HaveYouSeenThisWizard.vue'

export default {
  name: 'app',
  components: {
    HaveYouSeenThisWizard
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
