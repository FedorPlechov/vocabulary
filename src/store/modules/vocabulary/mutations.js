export default {
    createChunks(state, payload) {
        state.chunks.unshift(payload);
    },
    setChunks(state, payload) {
        state.chunks = payload;
    },
    setChunkIsCreated(state, payload){
        state.isCreated = payload
    },

    // setFetchTimestamp(state) {
    //     state.lastFetch = new Date().getTime();
    // }
};
