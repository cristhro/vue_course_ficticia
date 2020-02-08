<template>
  <div class="home">
    <!-- Filter -->
    <div class="home__search-name">
      <input
        v-model="nameToFilter"
        type="text"
        placeholder="¿Que nombre buscas?"
        v-on:keyup.enter="onEnterPressed"
      />
    </div>
    <button class="home__search-button" type="submit" @click="onEnterPressed">
      Search
    </button>

    <!-- Cards -->
    <div class="home__cards"
      v-if="listFiltered.length > 0"
    >
      <wizard-card
        v-for="(item, index) in listFiltered"
        :key="index"
        :name="item.name"
        :gender="item.gender"
        :dateOfBirth="item.dateOfBirth"
        :image="item.image"
        :isFavorite="item.isFavorite"
        :index="index"
        @add-favorite="addFavorite"
      >
        <router-link :to="`/detail/${index}`"> Go detail </router-link>
      </wizard-card>
    </div>

    <div v-else>
        Empty list
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import WizardCard from "@/components/WizardCard.vue";
import { tActions } from "@/helpers/types";
import { mapGetters } from 'vuex';

export default {
  name: "Home",
  components: {
    WizardCard
  },

  created() {
    localStorage.setItem("list", JSON.stringify(require("@/mocks/wizardList")));
    this.listFiltered = this.list
    this.nameToFilter = this.getFilterNameFromQueryParam() || '';
    this.listFiltered = this.getListFilteredByName(this.nameToFilter);
  },

  mounted() {},

  data() {
    return {
      listFiltered: [],
      nameToFilter: "",
      btnFavTitle: 'Favorite'
    };
  },

  computed: {
    ...mapGetters(['list']),
    name() {
      return this.data 
    }
  },
  methods: {
    getFilterNameFromQueryParam() {
      return this.$route.query.filterName;
    },
    getListFilteredByName(name) {
      return this.list.filter(it =>
        String(it.name)
          .toLowerCase()
          .includes(String(name).toLowerCase())
      );
    },
    onEnterPressed() {
      this.$router.push({
        name: "home",
        query: { filterName: this.nameToFilter }
      });
      this.listFiltered = this.getListFilteredByName(this.nameToFilter)
    },
    addFavorite(index) {
      console.log("<-- index: ", index);
      
      this.$store.dispatch(tActions.ADD_FAVORITE, this.list[index])
    },
    
  },

  // watch: {
  //   nameToFilter: {
  //     immediate: true,
  //     handler (newValue) {
  //       this.listFiltered = this.getListFilteredByName(newValue)
  //     }
  //   }
  // },
};
</script>

<style lang="scss" scoped>
.home {
  &__cards {
    display: flex;
    flex-wrap: wrap;
    padding: 2px 16px;
    justify-content: space-around;
  }
  &__search-name {
    input[type="text"] {
      width: 240px;
      box-sizing: border-box;
      border: 2px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
      background-color: white;
      background-image: url("https://www.w3schools.com/howto/searchicon.png");
      background-position: 10px 10px;
      background-repeat: no-repeat;
      padding: 12px 20px 12px 40px;
      -webkit-transition: width 0.4s ease-in-out;
      transition: width 0.4s ease-in-out;
    }
  
    input[type="text"]:focus {
      width: 100%;
    }
  }
    &__search-button {
      float: center;
      width: 20%;
      padding: 10px;
      background: black;
      color: white;
      font-size: 17px;
      border: 1px solid grey;
      border-left: none;
      cursor: pointer;
    }

}
</style>
