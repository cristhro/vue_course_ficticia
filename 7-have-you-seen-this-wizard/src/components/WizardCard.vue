<template>
  <div 
    class="wizard-card"
    :class="{
      'wizard-card--captured': captured
    }"
  >
    <img class="wizard-card__image" :src="image">
    <span class="wizard-card__price"> {{ price }} </span>
    <span class="wizard-card__name"> {{ name }}</span>

    <button @click="deleteMagician(index)">DELETE</button>
    <button @click="captureMagician(index)">CAPTURE</button>
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
    },
    captured({ item }) {
      return item.captured;
    }
  },
  methods: {
    deleteMagician(index) {
      this.$emit('delete-magician', index)
    },
    captureMagician(index) {
      this.$emit('capture-magician', index)
    }
  }
};
</script>

<style lang="scss" scoped>
.wizard-card {
  background-image: url('https://i.pinimg.com/originals/6e/20/c6/6e20c6c6f5b6ab2a7a7b4a20bb1060af.png');
  background-repeat: no-repeat;
  background-size: contain;
  display: grid;
  grid-gap: 10px;
  justify-items: center;
  color: white;
  font-size: 2em;
  padding: 5%;
  &__image {
    width: 200px;
    width: 400px;
    object-fit: cover;
  }
  &--captured {
    background: red;
  }
}
</style>
