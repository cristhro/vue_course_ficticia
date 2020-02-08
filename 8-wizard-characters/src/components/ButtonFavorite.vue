<template>
  <button 
    class="buttonFavorite"
    :class="{
      isFavorite
    }"
    >
    <slot/>
  </button>
</template>

<script>
  export default {
    name: 'ButtonFavorite',
    props: {
      isFavorite: {
        type: Boolean,
        default: false
      },
    },
    methods: {
      name() {
        
      }
    },
  }
</script>

<style lang="scss" scoped>
.buttonFavorite {
  background: red;
}
.isFavorite {
    background:gre;
}
</style>