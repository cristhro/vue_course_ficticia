<template>
  <div class="have-you-seen-this-wizard">
    <app-header :title="title" >
      <input type="text" v-model="itemSearch" placeholder="Buscar mago">
    </app-header>

    <div v-if="listFiltered.length === 0">
      Empty list
    </div>

    <WizardForm
      @on-submit="onSubmit"
    />
    <wizard-card
      class="have-you-seen-this-wizard__items"
      v-for="(item, index) in listFiltered"
      :key="index"
      :item="item"
      :index="index"
      @delete-magician="deleteMagician"
      @capture-magician="captureMagician"
    />
  </div>
</template>

<script>
import WizardCard from "@/components/WizardCard.vue";
import AppHeader from "@/components/AppHeader.vue";
import WizardForm from "@/components/WizardForm.vue";

export default {
  name: "HaveYouSeenThisWizard",
  components: {
    AppHeader,
    WizardCard,
    WizardForm,
  },
  data() {
    return {
      itemSearch: "",
      title: "Have You Seen This Wizard",
      list: [
        {
          id: 0,
          price: 10,
          name: "Rubeus Hagrid",
          image: require("@/assets/1-mago.jpg"),
          captured: false
        },
        {
          id: 0,
          price: 10,
          name: "Quirinus Quirrell",
          image: require("@/assets/2-mago.jpg"),
          captured: false
        },
        {
          id: 0,
          price: 10,
          name: "Quirinus Quirrell",
          image: require("@/assets/3-mago.jpg"),
          captured: false
        },
        {
          id: 0,
          price: 10,
          name: "Ron Weasley",
          image: require("@/assets/4-mago.jpg"),
          captured: false
        }
      ]
    };
  },
  computed: {
    listFiltered({ itemSearch }) {
      return this.list.filter((a) =>  a.name.toUpperCase().includes(itemSearch.toUpperCase()))
    }
  },
  methods: {
    captureMagician(index) {
      this.list[index].captured = !this.list[index].captured;
    },
    deleteMagician(index) {
      this.list = this.list.filter((a, indexFilter) => index != indexFilter);
    },
    onSubmit(data){
      this.list.push(data)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.have-you-seen-this-wizard {
  // TODO
  display: grid;
  grid-gap: 10px;
  justify-items: center;
}
</style>
