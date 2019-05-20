import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    data: [],
  },
  mutations: {
    RECEIVE_CHARACTERS(state, data) {
      state.data = data.data;
    },
  },
  actions: {
    async FETCH_CHARACTERS({commit}) {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/characters?ts=1&limit=12&apikey=cbbb228d5ac438f9ac17aa011f23a27b&hash=d45bef96bc57848a5cbfdc77047eb34e`,
        );
        console.log(response.data.data);
        commit('RECEIVE_CHARACTERS', response);
      } catch (error) {
        throw error;
      }
    },
  },
  getters: {
    FETCH_CHARACTERS(state) {
      return state.data;
    },
  },
});
