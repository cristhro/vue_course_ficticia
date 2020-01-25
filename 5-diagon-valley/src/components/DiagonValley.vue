<template>
  <div class="diagon-valley">
    <div class="diagon-valley__header">
      <h1>{{ title }}</h1>
      <h2>{{ description }}</h2>
    </div>

    <diagon-item
      class="diagon-valley__items"
      v-for="(product, index) in shopCard"
      :key="index"
      :product="product"
      :index="index"
      @add-quantity="addQuantity"
      @del-quantity="delQuantity"
    />
    <span> TOTAL: {{ total }}</span>
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
      shopCard: [
        {
          title: "Varita",
          quantity: 2,
          price: 2
        },
        {
          title: "Sombrero",
          quantity: 1,
          price: 1
        },
        {
          title: "Escoba",
          quantity: 10,
          price: 1
        }
      ]
    };
  },

  methods: {
    addQuantity(index) {
      this.shopCard[index].quantity++;
    },
    delQuantity(index) {
      this.shopCard[index].quantity--;

      // Check if not has quantity
      if (this.shopCard[index].quantity === 0) {
        this.shopCard = this.shopCard.filter(
          (a, indexFilter) => index != indexFilter
        );
      }
    }
  },
  computed: {
    total({ shopCard }) {
      return shopCard.reduce(
        (acum, { quantity, price }) => acum + quantity * price,
        0
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.diagon-valley {
  display: grid;
  grid-gap: 10px;
  justify-items: center;
}
</style>
