export default {
    async createChunk(context, data) {
        const userId = context.rootGetters.userId;
        const chunkData = {
            title: data.title,
            description: data.description,
            example: data.example,
            id: (new Date().getTime()).toString(36)
        };
        // const token = context.rootGetters.token;
        const response = await fetch(
            `https://vocabulary-61407-default-rtdb.firebaseio.com/chunks/${userId}.json`,
            {
                method: 'POST',
                body: JSON.stringify(chunkData)
            }
        );

        // const responseData = await response.json();

        if (!response.ok) {
            // error ...
        }
        context.commit('createChunks', chunkData);
        context.commit('setChunkIsCreated', true);
        setTimeout(() => context.commit('setChunkIsCreated', false), 4000);
    },
    async loadChunks(context) {
        const userId = context.rootGetters.userId;
        const response = await fetch(`https://vocabulary-61407-default-rtdb.firebaseio.com/chunks/${userId}.json`);
        const responseData = await response.json();

        let chunks = [];
        for (const key in responseData) {
            const chunk = {
                id: responseData[key].id,
                title: responseData[key].title,
                description: responseData[key].description,
                example: responseData[key].example,
                idFB: key
            }
            chunks.push(chunk);
        }
        context.commit('setChunks', chunks);
    },
    async editChunk(context, payload) {
        const userId = context.rootGetters.userId;
        const response = await fetch(`https://vocabulary-61407-default-rtdb.firebaseio.com/chunks/${userId}/${payload.idFB}.json`, {
            method: 'PUT',
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            console.log(response);
            // context.commit('')
        }
    },
    async deleteChunk(context, payload) {
        const userId = context.rootGetters.userId;
        const response = await fetch(`https://vocabulary-61407-default-rtdb.firebaseio.com/chunks/${userId}/${payload.idFB}.json`, {
            method: 'DELETE',
        });
        if (!response.ok) console.log(response);
        context.commit('delChunk', payload.id);
    }
};
//     async loadCoaches(context, payload) {
//         if (!payload.forceRefresh && !context.getters.shouldUpdate) {
//             return;
//         }
//
//         const response = await fetch(
//             `https://vue-http-demo-3a738-default-rtdb.firebaseio.com/coaches.json`
//         );
//         const responseData = await response.json();
//
//         if (!response.ok) {
//             const error = new Error(responseData.message || 'Failed to fetch!');
//             throw error;
//         }
//
//         const coaches = [];
//
//         for (const key in responseData) {
//             const coach = {
//                 id: key,
//                 firstName: responseData[key].firstName,
//                 lastName: responseData[key].lastName,
//                 description: responseData[key].description,
//                 hourlyRate: responseData[key].hourlyRate,
//                 areas: responseData[key].areas
//             };
//             coaches.push(coach);
//         }
//
//         context.commit('setCoaches', coaches);
//         context.commit('setFetchTimestamp');
//     }
// };
