<template>
  <div class="app-loader">
    <div class="loader loader-curtain is-active"> 
    {{ loadingText }}
    </div>

  </div>
</template>

<script>
export default {
  name: "AppLoader",
  data() {
    return {
      loadingText: "Loading..."
    };
  }
};
</script>

<style lang="scss" scoped>
.app-loader {
  color: #555555;
  font-size: 24px;
}
</style>
