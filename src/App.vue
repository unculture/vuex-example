<template>
  <div id="app">
      <h1>Counters</h1>
      <counter v-for="counter in counters" :counter-id="$index" :count="counter" track-by="$index"></counter>
      <div>
          <button class="add-counter-button" @click="addCounter">Add Counter</button>
      </div>
  </div>
</template>

<script>
    import counter from './Counter.vue';
    import { addCounter } from './actions';

    export default {
        vuex: {
            getters: {
                counters: state => state.counters // A "Getter"
            },
            actions: {
                addCounter // ES6 object literal shorthand for addCounter: addCounter
            }
        },
        components: {
            counter
        }
    };
</script>

<style scoped>
    button {
        padding: 1rem 2rem;
        margin: 1rem;
    }
</style>
