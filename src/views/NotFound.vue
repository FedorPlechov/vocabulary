<template>
  <section>
      <h2>Page not found</h2>
      <p>
        This page could not be found - maybe check out all our
        <router-link :to="{ name: 'Vocabulary'}">vocabulary</router-link>.
      </p>
  </section>
</template>


<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>
section {
  height: 30vh;
  border: 1px solid darkgreen;
  display: flex;
  flex-flow: nowrap column;
  justify-content: start;
}
h2  {
  align-self:center ;
}
p {
  padding: 1rem;
}
a {
  font-weight: 700;
  color: darkgreen;
}
</style>
