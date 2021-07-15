<template>
  <ul>
    <li>1222121212112321</li>
    <li>1222121212112321</li>
    <li>1222121212112321</li>
    <li>1222121212112321</li>
    <li>1222121212112321</li>
    <li>1222121212112321</li>
    <li>1222121212112321</li>
    <li>1222121212112321</li>
    <li>1222121212112321</li>
    <li>1222121212112321</li>
    </ul>
</template>

<script>
export default {
  name: "VocabularyAllChunks",
  methods: {
    chunksForPage() {
      this.$store.getters['vocabulary/chunks'].length/10
    }
  }
}
</script>

<style scoped>

</style>
