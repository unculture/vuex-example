import Vuex from 'vuex';
import Vue from 'vue';

import mutations from './mutations';
import state from './state';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations
});

