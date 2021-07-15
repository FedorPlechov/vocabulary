<template>
  <header>
    <router-link :to="{ name:'Vocabulary'}"><h1>MVB</h1></router-link>
    <nav>
      <button class="login" @click="logOut">logOut</button>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  methods: {
    logOut() {
      this.$store.dispatch('logout');
      this.$router.replace({name:  'Auth'});
    }
  }
}

</script>

<style lang="scss" scoped>
$main-color: #006400FF;
header {
  font-size: 0.8rem;
  display: flex;
  height: 10vh;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border: 3px solid $main-color;
  margin-bottom: 2rem;
}

h1 {
  color: $main-color;
  margin-left: 1rem;
}

nav {
  margin-right: 0.5rem;
  margin-top: 0.5rem;
}

.login {
  height: 2rem;
  width: 4rem;
  border: 2px solid #439400;
  background-color: aliceblue;
  border-radius: 10px;
}

a {
  text-decoration-color: #439400;
}
</style>
