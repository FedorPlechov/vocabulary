<template>
  <form @submit="sendEditedChunk" class="edit__field">
    <label for="title">Title</label>
    <input id="title" v-model="editedChunk.title" name="title" type="text">
    <label for="description">Description</label>
    <textarea id="description"  v-model="editedChunk.description"  name="description" rows="4"></textarea>
    <label for="example">Example</label>
    <textarea id="example"  v-model="editedChunk.example" name="example" rows="4"></textarea>
    <a class="button15 edit__button" href="#" @click="sendEditedChunk">Send</a>
  </form>
</template>

<script>
export default {
  name: "EditChunk",
  props: ['chunk'],
  data() {
    return {
      editedChunk: {
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
  mounted() {
    this.setPlaceHolder()
  },
  methods:{
    setPlaceHolder(){
      this.editedChunk = {
        title: this.chunk.title,
        description: this.chunk.description,
        example: this.chunk.example,
        idFB: this.chunk.idFB
      }
    },
    sendEditedChunk() {
      this.$store.dispatch('vocabulary/editChunk', this.editedChunk);
    }
  }
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
