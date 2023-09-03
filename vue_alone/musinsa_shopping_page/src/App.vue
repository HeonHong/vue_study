<template lang="">
  <div>
    <Header></Header>
  </div>
</template>
<script>
import Header from "./components/header/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: auto;
}
</style>
