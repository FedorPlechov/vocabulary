<template>
    <SearchVocabulary :search-term="enteredSearchTerm" @search="updateSearch" @add-chunk="$router.push({ name: 'CreateChunk'})"/>
    <ul>
      <Chunk v-for="chunk in availableChunks" :key="chunk.id"
             :chunk="chunk"/>
    </ul>
</template>

<script>
import SearchVocabulary from "@/components/PartsOfVocabulary/SearchVocabulary";
import Chunk from "@/components/Chunk/Chunk";

export default {
  name: "Vocabulary",
  components: {
    SearchVocabulary,
    Chunk
  },
  data() {
    return {
      activeSearchTerm: '',
      enteredSearchTerm: '',
      needChunks: [],
    }
  },
  computed: {
    availableChunks() {
      let filteredItems = [];
      if (this.activeSearchTerm) {
        filteredItems = this.chunks.filter(item =>
            item.title.includes(this.activeSearchTerm)
        );
      } else if (this.chunks) {
        filteredItems = [];
      }
      return filteredItems;
    },
    chunks(){
      return this.$store.getters.chunks;
    }
  },
  methods: {
    updateSearch(val) {
      this.enteredSearchTerm = val;
    },
    chunk(id){
      return this.chunks.filter(el => el.id === id)
    }
  },
  watch: {
    enteredSearchTerm(newValue) {
      setTimeout(() => {
        if (newValue === this.enteredSearchTerm) {
          this.activeSearchTerm = newValue;
        }
      }, 300);

    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: start;
}

</style>
