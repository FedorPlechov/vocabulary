<template>
  <div class="search">
    <input :value="searchTerm" placeholder="Filter items" type="search" @input="search"/><a class="button15 search"
                                                                                            href="#"
                                                                                            @click="addChunk">+</a>
  </div>
</template>

<script>
export default {
  props: ['searchTerm'],
  emits: ['search'],
  methods: {
    search(event) {
      this.$emit('search', event.target.value);
    },
    addChunk() {
      this.$emit('add-chunk')
    }
  },
};
</script>

<style scoped>
.search {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

input {
  font-size: large;
  width: 70%;
  height: 2.5rem;
  border: 2px solid forestgreen;
  border-radius: 10px;
}

label {
  margin-right: 0.5rem;
  align-self: center;
}

input:focus {
  outline: none;
  border-color: #8bb804;
  background-color: rgba(146, 231, 147, 0.66);
}

.button15.search {
  height: 100%;
  margin: auto 1rem;
  width: 2rem;
}
</style>
