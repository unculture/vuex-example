import Vue from 'vue';
import store from './store';
import App from './App.vue';

new Vue({
    store,
    el: 'body',
    components: { App }
});
