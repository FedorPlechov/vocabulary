<template>
  <form class="edit__field">
    <label for="title">Title</label>
    <input id="title" name="title" type="text" :value="chunk.title">
    <label for="description">Description</label>
    <textarea id="description" name="description" rows="4" :value="chunk.description"></textarea>
    <label for="example">Example</label>
    <textarea id="example" name="example" rows="4" :value="chunk.example"></textarea>
    <a href="#" class="button15 edit__button">Send</a>
  </form>
</template>

<script>
export default {
  name: "EditChunk",
  props:['chunk']
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
</style>
