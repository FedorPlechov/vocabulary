<template>
  <div>
    <h3>{{ chunk.title }}</h3>
    <p>Description: {{ chunk.description }}</p>
    <p>Example: {{ chunk.example }}</p>
  </div>
</template>

<script>
export default {
  name: "DetailChunk",
  props:['id'],
  inject:['findChunk'],
  computed: {
   chunk(){
     return this.findChunk(this.id)
   }
  }
}
</script>

<style scoped>

</style>
