<template>
  <div class="search">
    <input type="search" @input="search" :value="searchTerm" placeholder="Filter items" />
  </div>
</template>

<script>
export default  {
    props: ['searchTerm'],
    emits: ['search'],
    methods: {
  search(event) {
    this.$emit('search', event.target.value);
  },
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
</style>
