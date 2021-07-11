<template>
  <TheHeader></TheHeader>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/layouts/TheHeader'
export default {
  name: "App",
  components: {
    TheHeader
  },
}
</script>

<style lang="scss">
$main-color: #006400FF;
* {
  box-sizing: border-box;
  margin: 0;
  padding:0;
  font-family: 'Mukta', sans-serif;
}

</style>
