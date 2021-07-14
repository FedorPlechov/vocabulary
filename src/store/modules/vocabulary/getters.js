export default {
    chunks(state){
        return state.chunks;
    },
    popup(state){
        return state.popup;
    },
    shouldUpdate(state) {
        const lastFetch = state.lastFetch;
        if (!lastFetch) {
            return true;
        }
        const currentTimeStamp = new Date().getTime();

        return (currentTimeStamp - lastFetch) / 1000 > 600;
    }
}
