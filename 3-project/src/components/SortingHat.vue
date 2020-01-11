<template>
  <div class="sorting-hat">
    <!-- Title -->
    <h1>{{ title }}</h1>

    <!-- Img -->
    <img alt="Vue logo" src="@/assets/hat.jpg" />

    <!-- Ap button -->
    <app-button />
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";

export default {
  name: "SortingHat",
  components: {
    AppButton
  },
  data() {
    return {
      title: "Sombrero Seleccionador"
    };
  }
};
</script>

<style lang="scss" scoped>
.sorting-hat {
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 20px;
  justify-items: center;
}
</style>
