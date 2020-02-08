<template>
  <div class="the-header">
    <h2> {{ title }} </h2>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/favorites">Favorites</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      title: "WIZARD CHARACTERS"
    };
  }
};
</script>

<style lang="scss" scoped>
.the-header {
  padding: 16px;
  background: black;
  color: white;
  display: grid;
  justify-items: center;
}
h2 {
  margin: 0;
  padding: 0;
}
</style>
