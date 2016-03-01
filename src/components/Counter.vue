<template>
    <div class="counter">
        {{ currentCount }}
        <button @click="decrement">Decrement</button>
        <button @click="increment">Increment</button>
        <button @click="incrementIfOdd">Increment If Odd</button>
    </div>
</template>

<script>
    export default {
        props: ['counterId'],
        computed: {
            currentCount: function() {
                return this.$store.state.counters[this.counterId]
            }
        },
        methods: {
            increment: function() {
                this.$store.actions.increment(this.counterId)
            },
            decrement: function() {
                this.$store.actions.decrement(this.counterId)
            },
            incrementIfOdd: function() {
                this.$store.actions.incrementIfOdd(this.counterId)
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