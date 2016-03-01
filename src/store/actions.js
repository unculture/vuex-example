export default {
    increment: 'INCREMENT',
    decrement: 'DECREMENT',
    addCounter: 'ADD_COUNTER',
    incrementIfOdd: (store, counterId) => {
        if (store.state.counters[counterId] % 2 !== 0) {
            store.dispatch('INCREMENT', counterId)
        }
    },
};