<template>
  <div>
    <div class="card">
      <h3>{{ chunk.title }}</h3>
      <button class="close"></button>
      <p><span>Description:</span> {{ chunk.description }}</p>
      <p><span>Example:</span> {{ chunk.example }}</p>
      <div>
        <router-link :to="{name:'Vocabulary' }" class="button15">Back</router-link>
        <router-link :to="{ name: 'Edit' }" class="button15">Edit</router-link>
        <router-link :to="{ name: 'Delete'}" class="button15">Delete</router-link>
      </div>
    </div>
    <div>
      <router-view :chunk="chunk"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailChunk",
  props: ['id'],
  computed: {
    chunk() {
      return this.$store.getters.chunks.find(el => el.id === this.id)
    }
  }
}
</script>

<style scoped>
.card {
  font-size: 1.4rem;
  display: flex;
  border: 2px solid darkgreen;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem;
  margin-bottom: 2rem;
}

span {
  color: darkgreen;
  display: block;
  text-align: center;
}
</style>
