<template>
  <div class="app-header">
    <span class="app-header__title">
      {{ title }}
    </span>
    <slot class="app-header__slot"></slot>
  </div>
</template>

<script>
  export default {
    name: 'AppHeader',
    props: {
      title: {
        type: String,
        default: ''
      },
    },
  }
</script>

<style lang="scss" scoped>
.app-header {
  display: grid;
  background: #404040;
  height: 80px;
  width: 100%;
  color: white;
  font-size: 2em;
  align-items: center;

  &__title{}
  &__slot{
    padding: 40px;
  }
}
</style>