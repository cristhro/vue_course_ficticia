<template>
  <div class="diagon-valley">
    <div class="diagon-valley__header">
      <h1>{{ title }}</h1>
      <h2>{{ description }}</h2>
    </div>

    <span> <strong>
      TOTAL: {{ total }}
    </strong> </span>
    <div class="diagon-valley__container">
      <diagon-item
        class="diagon-valley__items"
        v-for="(product, index) in shopCard"
        :key="index"
        :product="product"
        :index="index"
        @add-quantity="addQuantity"
        @del-quantity="delQuantity"
      />

    </div>
  </div>
</template>

<script>
import DiagonItem from "@/components/DiagonItem.vue";

export default {
  name: "DiagonValley",

  components: {
    DiagonItem
  },

  data() {
    return {
      title: "Diagon Valley",
      description: "Lista de la compra ",
    };
  },
  computed: {
    shopCard() {
      return this.$store.state.shopCard
    },
    total() {
      return this.$store.getters.total
    }
  },

  methods: {
    addQuantity(index) {
      this.$store.dispatch('addQuantity', index)
    },
    delQuantity(index) {
      this.$store.dispatch('delQuantity', index)
    }
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.diagon-valley {
  display: grid;
  grid-gap: 10px;
  justify-items: center;
  font-size: 1.2em;
  
  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    justify-content: center;
  }
}
</style>
