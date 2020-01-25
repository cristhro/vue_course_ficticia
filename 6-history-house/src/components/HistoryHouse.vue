<template>
  <div class="history-house">
    <div class="history-house __header">
      <h1>{{ title }}</h1>
      <h2>{{ description }}</h2>
    </div>

    <!-- Select -->
    <div class="history-house__select">
      <select v-model="houseId">
        <option v-for="{ _id, name } in houses" :key="_id" :value="_id">
          {{ name }} 
        </option>
      </select>
    </div>
    
    <!-- Loading -->
    <app-loader v-if="loading"/>

    <!-- Card -->
    <house-card 
      v-if="houseData && !loading"
      :name="houseData.name"
      :mascot="houseData.mascot"
      :headOfHouse="houseData.headOfHouse"
      :founder="houseData.founder"
      :members="houseData.members"
      category="active"
    />
  </div>
</template>

<script>
import AppLoader from "@/components/AppLoader.vue";
import HouseCard from "@/components/HouseCard.vue";

export default {
  name: "HistoryHouse",

  components: {
    AppLoader,
    HouseCard
  },

  created () {
    const { houseId } = this;
    this.fetchHouseById({ houseId });
  },

  data() {
    return {
      API_KEY: '$2a$10$AGBxctFraTDnhnOoHNCP.eLxNtf/ZlnNn2rSyLA0ewaYdbFYS0AMm',
      API_URL_HOUSES: 'https://www.potterapi.com/v1/houses/',
      title: "History house",
      description: "Dropdown ",
      houses: [
        {
          _id: "5a05e2b252f721a3cf2ea33f",
          name: "Ravenclaw"
        },
        {
          _id: "5a05da69d45bd0a11bd5e06f",
          name: "Gryffindor"
        },
        {
          _id: "5a05dc8cd45bd0a11bd5e071",
          name: "Slytherin"
        },
        {
          _id: "5a05dc58d45bd0a11bd5e070",
          name: "Hufflepuff"
        }
      ],
      loading: false,
      houseData: null,
      houseId: '5a05da69d45bd0a11bd5e06f'
    };
  },

  methods: {
    isString(val) {
      return typeof val === 'string';
    },
    async fetchHouseById({ houseId }){
      if (!houseId) throw `Unknown houseId`

      const { API_KEY, API_URL_HOUSES } = this;

      this.loading = true;
      await fetch(
        `${API_URL_HOUSES}${houseId}?key=${API_KEY}`
      ).then(response => {
        return response.json();
      })
      .then(houseData => {
        this.loading = false;
        this.houseData = houseData[0];          
      });
    }
  },

  watch: {
    houseId(houseId) {
      this.fetchHouseById({ houseId });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.history-house {
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 20px;
  justify-items: center;
  
  &__select{
  //  TODO
  }
}
</style>
