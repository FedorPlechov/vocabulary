<template>
  <form @submit="createNewChunk" class="edit__field">
    <label for="title">Title</label>
    <input id="title" name="title" type="text" v-model="newChunk.title" >
    <label for="description">Description</label>
    <textarea id="description" name="description" rows="4" v-model="newChunk.description"></textarea>
    <label for="example">Example</label>
    <textarea id="example" name="example" rows="4" v-model="newChunk.example" ></textarea>
    <a href="#" class="button15 edit__button" @click="createNewChunk">Send</a>
  </form>
</template>

<script>

export default {
  name: "CreateChunk",
  data(){
    return {
      newChunk: {
        title: '',
        description: '',
        example:''
      }
    }
  },
  methods: {
    createNewChunk() {
      this.$store.dispatch('vocabulary/createChunk', this.newChunk )
    this.$router.replace({name:'Vocabulary'})
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
textarea,input {
  border-radius: 10px;
}
textarea, input {
  border-radius: 10px;
}
input,textarea {
  font-size: large;
  height: 2.5rem;
  border: 1px solid #b1eeb1;
  border-radius: 10px;
  color: darkgreen;
}
textarea {
  height: 5.5rem;
}

input:focus,textarea {
  outline: none;
  border-color: #8bb804;
  background-color: rgba(146, 231, 147, 0.66);
}textarea, input {
   border-radius: 10px;
 }
input,textarea {
  font-size: large;
  height: 2.5rem;
  border: 1px solid #b1eeb1;
  border-radius: 10px;
  color: darkgreen;
}
textarea {
  height: 5.5rem;
}

input:focus,textarea {
  outline: none;
  border-color: #8bb804;
  background-color: rgba(146, 231, 147, 0.66);
}
</style>
