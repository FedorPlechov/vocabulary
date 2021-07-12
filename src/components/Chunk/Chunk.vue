<template>
  <li>
    <router-link :to="{ name: 'DetailChunk', params:{ id: chunk.id} }">{{ chunk.title }}</router-link>
  </li>
</template>

<script>
export default {
  name: "Chunk",
  props: ['chunk'],
}
</script>

<style scoped>

li:after {
  content: "";
  display: block;
  height: 2px;
  width: 80%;
  background: rgb(14,52,2);
  background: linear-gradient(90deg, rgba(14,52,2,1) 0%, rgba(129,215,164,1) 100%);
  margin-top: 5px;
}
li {
  width: 80%;
  align-self: center;
  cursor: pointer;
}
</style>
