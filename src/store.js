import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    // Initial state
    state: {
        counters: []
    },
    // Mutations
    mutations: {
        INCREMENT: ({ counters }, counterId) => {
            counters.$set(counterId, counters[counterId] + 1)
        },
        DECREMENT: ({ counters }, counterId) => {
            counters.$set(counterId, counters[counterId] - 1)
        },
        ADD_COUNTER: ({ counters }) => {
            counters.push(0)
        }
    }
});
