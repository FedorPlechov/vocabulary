<template>
  <span v-if="popup" class="popup">{{ popup }}</span>
  <SearchVocabulary :search-term="enteredSearchTerm" @search="updateSearch"
                    @add-chunk="$router.push({ name: 'CreateChunk'})"/>
  <pulse-loader :loading="loading" class="loader" size="15px"></pulse-loader>
  <ul>
    <li v-if="!chunks.length" class="show">You haven't got any chunks yet.Please press [ + ] to add one.</li>
    <li v-if="!enteredSearchTerm && !loading" class="show">You can start to write chunk in search or look at all your <a
        class="button15" href="#" @click="toggleShowAllChunks">chunks</a>
    </li>
    <Chunk v-for="chunk in availableChunks" :key="chunk.id"
           :chunk="chunk"/>
  </ul>
  <all-chunks v-if="showAllChunks && !enteredSearchTerm"></all-chunks>
</template>

<script>
import SearchVocabulary from "@/components/PartsOfVocabulary/SearchVocabulary";
import Chunk from "@/components/Chunk/Chunk";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import VocabularyAllChunks from "@/components/PartsOfVocabulary/VocabularyAllChunks";

export default {
  name: "Vocabulary",
  components: {
    SearchVocabulary,
    Chunk,
    PulseLoader,
    AllChunks: VocabularyAllChunks
  },
  data() {
    return {
      activeSearchTerm: '',
      enteredSearchTerm: '',
      needChunks: [],
      loading: false,
      showAllChunks: false,
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
    toggleShowAllChunks() {
      this.showAllChunks = true;
    },
    updateSearch(val) {
      this.enteredSearchTerm = val;
    },
    chunk(id) {
      return this.chunks.filter(el => el.id === id)
    },
    async loadChunks(refresh = false) {
      this.loading = true;
      await this.$store.dispatch('vocabulary/loadChunks', {
        forceRefresh: refresh,
      });
      setTimeout(() => {
        this.loading = false
      }, 2000);
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
    this.loadChunks()
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
  animation: pop-up 5s ease-out;
  color: #8bb804;
  top: 21vh;
  left: 30vw;
}

.loader {
  position: relative;
  left: 2rem;
  top: -1rem;

}

li.show {
  padding: 1rem 2rem;
  color: darkgreen;
  box-shadow: 1px 1px 1px 2px darkgreen;
  animation: opacity 3s ease-out;
}
.show a {
  color: #439400;
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

@keyframes opacity {
  from {
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
