<template>
  <div class="wizard-card">
    <img alt="Vue logo" :src="image">
    <span class="wizard-card__price"> {{ price }} </span>
    <span class="wizard-card__quantity"> {{ name }}</span>

    <button @click="addQuantity(index)">DELETE</button>
    <button @click="delQuantity(index)">CAPTURE</button>
  </div>
</template>

<script>
export default {
  name: "WizardCard",
  // TODO: revisar las herramientas de desarollo de los eventos
  props: {
    item: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  computed: {
    price({ item }) {
      return item.price;
    },
    name({ item }) {
      return item.name;
    },
    image({ item }) {
      return item.image;
    }
  },
  methods: {
    addQuantity(index) {
      this.$emit('add-name', index)
    },
    delQuantity(index) {
      this.$emit('del-name', index)
    }
  }
};
</script>

<style lang="scss" scoped>
.wizard-card {
  background-image: url('https://i.imgflip.com/8p7xl.jpg');
}
</style>
