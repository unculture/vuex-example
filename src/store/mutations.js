export default {
    INCREMENT: (state, counterId) => {
        state.counters.$set(counterId, state.counters[counterId] + 1)
    },
    DECREMENT: (state, counterId) => {
        state.counters.$set(counterId, state.counters[counterId] - 1)
    },
    ADD_COUNTER: (state) => {
        state.counters.push(0)
    }
};
