import Vue from 'vue';
import store from './store';
import App from './App.vue';

Vue.config.debug = true;

new Vue({
    store,
    el: 'body',
    components: { App }
});
