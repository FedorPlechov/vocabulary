<template>
  <form class="edit__field">
    <label for="title">Title</label>
    <input id="title" v-model="editChunk.title"  name="title" type="text">
    <label for="description">Description</label>
    <textarea id="description" v-model="editChunk.description"  name="description" rows="4"></textarea>
    <label for="example">Example</label>
    <textarea id="example"  v-model="editChunk.example" name="example" rows="4"></textarea>
    <a class="button15 edit__button" href="#">Send</a>
  </form>
</template>

<script>
export default {
  name: "EditChunk",
  props: ['chunk'],
  data() {
    return {
      editChunk: {
        title: '',
        description: '',
        example: '',
      }
    }
  },
  computed: {
    idFb() {
      return this.chunk.idFb;
    }
  },
  // beforeRouteUpdate(to, from, next) {
  //
  // }
}
</script>

<style scoped>
.edit__field {
  display: flex;
  flex-flow: column nowrap;
  border: 2px solid darkgreen;
  padding: 1rem;
}

.edit__button {
  text-align: center;
  margin-top: 0.5rem;
}

textarea, input {
  border-radius: 10px;
}
</style>
