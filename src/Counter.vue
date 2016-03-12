<template>
    <div class="counter">
        {{ count }}
        <button @click="decrement(counterId)">Decrement</button>
        <button @click="increment(counterId)">Increment</button>
        <button @click="incrementIfOdd(counterId)">Increment If Odd</button>
    </div>
</template>

<script>
    import { increment, decrement, incrementIfOdd } from './actions';

    export default {
        props: ['counterId', 'count'],
        vuex: {
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