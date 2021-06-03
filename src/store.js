import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import "regenerator-runtime/runtime.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    events: [],
    selectedEvent: "",
    apiData: ""
  },
  getters: {},
  mutations: {
    updateEvents: (state, data) => {
      return (state.events = data);
    },
    setSelectedEvent: (state, data) => {
      return (state.selectedEvent = data);
    },
    setApiData: (state, data) => {
      return state.apiData = data;
    }
  },

  actions: {
    loadEvents: function({ commit }) {
      commit("updateEvents");
    },
    eventSelected: function({ commit }, payload) {
      commit("setSelectedEvent", payload.ganttProperties.taskId);
    },
    apiSelected: async function({ commit }, payload) {
      const products_url = "https://api.coindesk.com/v1/bpi/currentprice.json";
      const response = await axios.get(products_url);
      commit("setApiData", response.data.bpi);
    }
  }
});

export default store;
