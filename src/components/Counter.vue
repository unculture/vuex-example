<template>
    <div class="counter">
        {{ currentCount }}
        <button @click="decrement(counterId)">Decrement</button>
        <button @click="increment(counterId)">Increment</button>
        <button @click="incrementIfOdd(counterId)">Increment If Odd</button>
    </div>
</template>

<script>
    import { increment, decrement, incrementIfOdd } from '../actions';

    export default {
        props: ['counterId'],
        vuex: {
            state: {
                currentCount: function(state) {
                     return state.counters[this.counterId];
                }
            },
            actions: {
                increment,
                decrement,
                incrementIfOdd
            }
        }
    }
</script>

<style>
    .counter {
        border: 1px solid black;
        padding: 1rem 2rem;
        margin: 1rem;
        display: inline-block;
    }
</style>