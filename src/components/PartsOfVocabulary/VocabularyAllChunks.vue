<template>
  <div class="buttons">
    <a v-if="page > 1" class="button15" href="#" @click="backPage">backPage</a><a v-if="page < allPage" class="button15" href="#"
                                                                  @click="nextPage">nextPage</a>
  </div>
  <ul>
    <li v-for="chunk in chunksAvailable" :key="chunk.id">
      <router-link :to="{name: 'DetailChunk', params: {id:chunk.id}}">{{ chunk.title }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "VocabularyAllChunks",
  data() {
    return {
      page: 1
    }
  },
  computed: {
    allPage() {
      const chunks = this.$store.getters['vocabulary/chunks'];
      return Math.ceil(chunks.length / 12);
    },
    chunksAvailable() {
      const chunks = this.$store.getters['vocabulary/chunks'];
      const arr = chunks.slice(this.page*12-12, this.page*12);

      return arr
    },
  },
  methods: {
    nextPage() {
      this.page += 1
    },
    backPage() {
      this.page -= 1
    }
  }
}
</script>

<style scoped>

ul {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 2rem;
  list-style: none;
}

li {
  color: darkgreen;
  padding: 0.25rem;
}
a{
  color: #439400;
}

.buttons {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
}
</style>
