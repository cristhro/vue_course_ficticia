<template>
  <div class="app-favorites">
    <!-- Cards -->
      <wizard-card
        v-for="(item, index) in favorites"
        :key="index"
        :name="item.name"
        :gender="item.gender"
        :dateOfBirth="item.dateOfBirth"
        :image="item.image"
        :isFavorite="item.isFavorite"
      >
        <router-link :to="`/detail/${index}`"> Go detail </router-link>
      </wizard-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import WizardCard from "@/components/WizardCard.vue";

export default {
  name: "app-favorites",
  components: {
    WizardCard
  },

  computed: {
    ...mapState(["favorites"])
  },
};
</script>

<style lang="scss" scoped>
  .app-favorites {
    display: flex;
    flex-wrap: wrap;
    padding: 2px 16px;
    justify-content: space-around;
  }
</style>
