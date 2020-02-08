import Vue from 'vue';
import Vuex from 'vuex';
import { tMutations, tActions } from '../helpers/types'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        favorites: [],
        list: require("@/mocks/wizardList")
    },
    getters: {
        list: ({ list }) => list
    },
    mutations: {
        [tMutations.ADD_FAVORITE]({ favorites, list }, payload) {
            favorites.push(payload);
            const index = list.findIndex(({ name }) => name === payload.name);
            list[index] = Object.assign({}, list[index], { isFavorite: true });
        }
    },
    actions: {
        [tActions.ADD_FAVORITE]({commit}, payload) {
            commit(tMutations.ADD_FAVORITE, payload);
        }
    }
});