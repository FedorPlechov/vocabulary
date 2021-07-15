<template>
  <span v-if="popup" class="popup">{{ popup }}</span>
  <SearchVocabulary :search-term="enteredSearchTerm" @search="updateSearch"
                    @add-chunk="$router.push({ name: 'CreateChunk'})"/>
  <pulse-loader class="loader" :loading="loading" size="15px"></pulse-loader>
  <ul>
    <li class="show" v-if="!chunks.length">You haven't got any chunks yet.Please press [ + ] to add one.</li>
    <li class="show" v-if="!enteredSearchTerm && !loading">You can start to write chunk in search or look all your <a class="button15" href="#">chunks</a>(isn't
      working yet)
    </li>
    <Chunk v-for="chunk in availableChunks" :key="chunk.id"
           :chunk="chunk"/>
  </ul>
  <router-view></router-view>
</template>

<script>
import SearchVocabulary from "@/components/PartsOfVocabulary/SearchVocabulary";
import Chunk from "@/components/Chunk/Chunk";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  name: "Vocabulary",
  components: {
    SearchVocabulary,
    Chunk,
    PulseLoader
  },
  data() {
    return {
      activeSearchTerm: '',
      enteredSearchTerm: '',
      needChunks: [],
      loading: false,
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
    },
    async loadChunks(refresh = false) {
      this.loading = true;
      await this.$store.dispatch('vocabulary/loadChunks', {
        forceRefresh: refresh,
      });
      setTimeout(() => {this.loading = false} , 2000);
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
