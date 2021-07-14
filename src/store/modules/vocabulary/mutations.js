export default {
    createChunks(state, payload) {
        state.chunks.unshift(payload);
    },
    setChunks(state, payload) {
        state.chunks = payload;
    },
    showPopup(state, payload){
        state.popup = payload
    },
    editChunk(state, payload){
        const index = state.chunks.findIndex(payload);
        state.chunks.splice(index, 1);
    },
    delChunk(state,payload){
        state.chunks = state.chunks.filter(el => el.id !== payload);
    },
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    }
    // setFetchTimestamp(state) {
    //     state.lastFetch = new Date().getTime();
    // }
};
