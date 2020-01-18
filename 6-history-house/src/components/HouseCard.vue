<template>
  <div class="house-card">
      <h1>{{ titleCard }}</h1>
      <strong> {{ labels.name }}: </strong>  {{ name }}
      <strong> {{ labels.mascot }}: </strong>  {{ mascot }}
      <strong> {{ labels.headOfHouse }}: </strong>  {{ headOfHouse }}
      <strong> {{ labels.founder }}: </strong>  {{ founder }}
      <strong> {{ labels.members }}: </strong>  {{ members.reduce((acum, { name }) => acum + ', ' + name, '') }}  
  </div>
</template>

<script>
export default {
  name: "HouseCard",
  props: {

    category: {
      type: String,
      default: '',
      validator(value) {
        return ['active', 'inactive'].includes(value)
      }
    },
    name: {
      type: String,
      default: '',
    },
    mascot: {
      type: String,
      default: ''
    },
    headOfHouse: {
      type: String,
      default: ''
    },
    founder: {
      type: String,
      default: ''
    },
    members: {
      type: Array,
    },
  },

  data() {
    return {
      titleCard: "Card",
      labels: {
        name: 'Name',
        mascot: 'Mascot',
        headOfHouse: 'HeadOfHouse',
        founder: 'Founder',
        members: 'Members',
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.house-card {
  background: #cbcaca;
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 20px;
  justify-items: center;
}
</style>
