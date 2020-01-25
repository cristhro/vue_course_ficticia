<template>
  <div class="diagon-item">
    <span class="diagon-item__title"> <strong> Title: </strong>  {{ title }} </span>
    <span class="diagon-item__quantity"> <strong> Quantity: </strong>  {{ quantity }}</span>
    <span class="diagon-item__price"> <strong> Price: </strong>  {{ price }}</span>
    <span class="diagon-item__total"> <strong> Total: </strong>  {{ total }}</span>

    <button @click="addQuantity(index)">ADD</button>
    <button @click="delQuantity(index)">DEL</button>
  </div>
</template>

<script>
export default {
  name: "DiagonItem",
  // TODO: revisar las herramientas de desarollo de los eventos
  props: {
    product: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  computed: {
    title({ product }) {
      return product.title;
    },
    quantity({ product }) {
      return product.quantity;
    },
    price({ product }) {
      return product.price;
    },
    total({ product }) {
      return product.quantity * product.price;
    }
  },
  methods: {
    addQuantity(index) {
      this.$emit('add-quantity', index)
    },
    delQuantity(index) {
      this.$emit('del-quantity', index)
    }
  }
};
</script>

<style lang="scss" scoped>
.diagon-item {
  display: grid;
  grid-gap: 5px;
  grid-template-rows: 1fr;
  grid-template-columns: 20% 20% 15% 15% 1fr 1fr;
}
</style>
