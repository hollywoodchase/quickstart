import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        events: [],
        selectedEvent: ""
    },
    getters: {},
    mutations: {
        updateEvents: (state, data) => {
            return state.events = data;
        },
        setSelectedEvent: (state, data) => {
            return state.selectedEvent = data;
        }
    },
    actions: {
        loadEvents: function({commit}) {
            commit("updateEvents");
        },
        eventSelected: function({commit}) {
            commit("setSelectedEvent", payload);
        }
    }
});

export default store;