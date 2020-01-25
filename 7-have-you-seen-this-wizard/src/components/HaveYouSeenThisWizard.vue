<template>
  <div class="have-you-seen-this-wizard">
      <wizard-card
          class="have-you-seen-this-wizard__items"
          v-for="(item, index) in list"
          :key="index"
          :item="item"
          :index="index"
          @add-quantity="addQuantity"
          @del-quantity="delQuantity"
      />  
  </div>
</template>

<script>


import WizardCard from "@/components/WizardCard.vue";

export default {

  name: 'HaveYouSeenThisWizard',
  components: {
    WizardCard
  },
  data() {
    return {
      list: [
        {
          id: 0,
          price: 10,
          name: 'Rubeus Hagrid',
          image: require('@/assets/1-mago.jpg')
        },
        {
          id: 0,
          price: 10,
          name: 'Quirinus Quirrell',
          image: require('@/assets/2-mago.jpg'),
        },
        {
          id: 0,
          price: 10,
          name: 'Quirinus Quirrell',
          image: require('@/assets/3-mago.jpg'),
        },
        {
          id: 0,
          price: 10,
          name: 'Ron Weasley',
          image: require('@/assets/4-mago.jpg')
        }
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.have-you-seen-this-wizard {
  // TODO

}
</style>
