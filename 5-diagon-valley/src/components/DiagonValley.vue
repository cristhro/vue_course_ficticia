<template>
  <div class="diagon-valley">
    <div class="diagon-valley__header">
      <h1> {{ title }} </h1>
      <h2> {{ description }} </h2>
    </div>

    <table class="diagon-valley__table">
      <thead
        class="diagon-valley__head"
      >
        <tr>
          <th>Title</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody
        class="diagon-valley__body"  
      >
        <tr v-for="({ title, quantity, price }, index) in shopCard" :key="index">
          <td>{{ title }}</td>
          <td>{{ quantity }}</td>
          <td>{{ price }}</td>
          <td>{{ quantity * price }}</td>
          <td>
              <button @click="addQuantity(index)">ADD</button>
              <button @click="delQuantity(index)">DEL</button>

          </td>
        </tr> 
        <tr >
          <td>Total</td>
          <td></td>
          <td> </td>
          <td> {{ total }}</td>
        </tr> 
      </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: 'DiagonValley',
  data() {
    return {
      title: 'Diagon Valley',
      description: 'Lista de la compra ',
      shopCard: [
        {
          title: 'Varita',
          quantity: 2,
          price: 2,
        },
        {
          title: 'Sombrero',
          quantity: 1,
          price: 1,
        },
        {
          title: 'Escoba',
          quantity: 10,
          price: 1,
        }
      ]  
    }
  },

  methods: {
    addQuantity(index) {
      this.shopCard[index].quantity++;
    },
    delQuantity(index) {
      console.log(index);
      
      this.shopCard[index].quantity--;

      if(this.shopCard[index].quantity === 0) {
        this.shopCard = this.shopCard.splice(index, 1)
      }
    }
  },
  computed: {
    total({ shopCard }) {
      return shopCard.reduce((acum, { quantity, price }) => acum + quantity * price , 0)
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.diagon-valley {
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 20px;
  justify-items: center;
}
</style>
