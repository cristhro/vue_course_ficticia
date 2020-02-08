import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const toFilterCard = (shopCard, index) => shopCard.filter((item, indexFilter) => index != indexFilter)

export default new Vuex.Store({
    state: {
        shopCard: [
            {
              title: "Varita",
              quantity: 2,
              price: 2
            },
            {
              title: "Sombrero",
              quantity: 1,
              price: 1
            },
            {
              title: "Escoba",
              quantity: 10,
              price: 1
            }
          ]
    },
    getters: {
        total: ({ shopCard }) => {
            return shopCard.reduce((acum, { quantity, price }) => acum + quantity * price, 0);
        }
    },
    mutations: {
        ADD_QUANTITY({ shopCard }, index) {
            shopCard[index].quantity++;
        },
        REMOVE_QUANTITY({ shopCard }, index) {
            shopCard[index].quantity--;
            shopCard = shopCard[index].quantity === 0 ? toFilterCard(shopCard, index) : [];
        }
    },
    actions: {
        addQuantity({ commit }, index) {
            commit('ADD_QUANTITY', index)
        },
        delQuantity({ commit }, index) {
            commit('REMOVE_QUANTITY', index)
        }
    },
});