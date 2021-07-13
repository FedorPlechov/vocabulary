<template>
  <span v-if="popup" class="popup">{{ popup }}</span>
  <SearchVocabulary :search-term="enteredSearchTerm" @search="updateSearch"
                    @add-chunk="$router.push({ name: 'CreateChunk'})"/>
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
    popup() {
      return this.$store.getters['vocabulary/popup'];
    },
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
    chunks() {
      return this.$store.getters['vocabulary/chunks'];
    }
  },
  methods: {
    updateSearch(val) {
      this.enteredSearchTerm = val;
    },
    chunk(id) {
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
  },
  created() {
    this.$store.dispatch('vocabulary/loadChunks');
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

.popup {
  position: absolute;
  animation: pop-up 5s ease-out ;
  color: #8bb804;
  top: 21vh;
  left: 30vw;
}

@keyframes pop-up {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-20px);
    opacity: 0;
  }
}
</style>
