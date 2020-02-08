<template>
  <div class="diagon-item">
    <div class="diagon-item__container">
      <span class="diagon-item__container__title">
        <strong> Title: </strong> {{ title }}
      </span>
      <span class="diagon-item__container__quantity">
        <strong> Quantity: </strong> {{ quantity }}</span
      >
      <span class="diagon-item__container__price">
        <strong> Price: </strong> {{ price }}</span
      >
      <span class="diagon-item__container__total">
        <strong> Total: </strong> {{ total }}</span
      >
      <div class="diagon-item__container__buttons">
        <button
          class="diagon-item__container__buttons__add"
          @click="addQuantity(index)"
        >
          ADD
        </button>
        <button
          class="diagon-item__container__buttons__del"
          @click="delQuantity(index)"
        >
          DEL
        </button>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "DiagonItem",
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
      this.$emit("add-quantity", index);
    },
    delQuantity(index) {
      this.$emit("del-quantity", index);
    }
  }
};
</script>

<style lang="scss" scoped>
.diagon-item {
  flex: 0 1 24%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
  margin: 5px;
  max-width: 240px;
  min-width: 240px;
  border-radius: 25px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  &__container {
    display: grid;
    grid-row-gap: 10px;
    padding: 8px 0 0 0;

    &__buttons {
      color: white;
      display: flex;
      height: 80px;

      &__add {
        width: 50%;
        border-radius: 0 0 0 25px;
        color: white;
        padding: 15px 25px;
        font-size: 24px;
        text-align: center;
        cursor: pointer;
        outline: none;
        color: #fff;
        background-color: #4caf50;
        border: none;
        box-shadow: 0 9px #999;

        &:hover {
          background-color: #3e8e41;
        }

        &:active {
          background-color: #3e8e41;
          box-shadow: 0 5px #666;
          transform: translateY(4px);
        }
      }
      &__del {
        width: 50%;
        border-radius: 0 0 25px;
        color: white;
        padding: 15px 25px;
        font-size: 24px;
        text-align: center;
        cursor: pointer;
        outline: none;
        color: #fff;
             background-color: rgb(252, 70, 70);
        border: none;
        box-shadow: 0 9px #999;

        &:hover {
          background-color: #e65656;
        }

        &:active {
          background-color: #ee7474;
          box-shadow: 0 5px #666;
          transform: translateY(4px);
        }
      }
    }
  }
}
</style>
