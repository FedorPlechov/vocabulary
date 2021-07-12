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
a.button15 {
  display: inline-block;
  font-family: arial,sans-serif;
  font-size: 1rem;
  font-weight: bold;
  color: darkgreen;
  text-decoration: none;
  user-select: none;
  padding: .2em 1.2em;
  outline: none;
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 2px;
  background: rgb(245,245,245) linear-gradient(#f4f4f4, #f1f1f1);
  transition: all .218s ease 0s;
}
a.button15:hover {
  color: rgb(24,24,24);
  border: 1px solid rgb(198,198,198);
  background: #f7f7f7 linear-gradient(#f7f7f7, #f1f1f1);
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
}
a.button15:active {
  color: rgb(51,51,51);
  border: 1px solid rgb(204,204,204);
  background: rgb(238,238,238) linear-gradient(rgb(238,238,238), rgb(224,224,224));
  box-shadow: 0 1px 2px rgba(0,0,0,.1) inset;
}
</style>
