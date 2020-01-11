<template>
  <div class="app-button">
    <!-- Button -->
    <button class="app-button__button" @click="setHouse">
      {{ textButton }}
    </button>

    <!-- Loading -->
    <app-loader v-if="loading"> </app-loader>

    <!-- Selected -->
    <h3 v-else class="app-button__house">{{ house }}</h3>
  </div>
</template>

<script>
import AppLoader from "@/components/AppLoader.vue";

export default {
  name: "AppButton",
  components: {
    AppLoader
  },
  data() {
    return {
      textButton: "You click me for select a house",
      houses: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
      house: "",
      loading: false
    };
  },
  methods: {
    setHouse() {
      this.loading = true;
      setTimeout(() => {
        this.house = this.getRandomFromArray(this.houses);
        this.loading = false;
      }, 5000);
    },
    getRandomFromArray(list) {
      return list[Math.floor(Math.random() * list.length)];
    }
  }
};
</script>

<style lang="scss" scoped>
.app-button {
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 20px;

  &__button {
    color: #404040;
    font-size: 24px;
    border: 4px solid #494949;
    transition: all 0.4s ease 0s;
    text-decoration: none;

    &:hover {
      color: #ffffff;
      background: #f6b93b;
      border-color: #f6b93b;
      transition: all 0.4s ease 0s;
    }
  }

  &__house {
    font-size: 34px;
    color: #555555;
  }
}
</style>
