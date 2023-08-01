<template>
  <div>
    <!-- header -->
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>

      <ul class="header-button-right">
        <li>Publish</li>
      </ul>

      <img class="logo" src="./assets/logo.png" />
    </div>

    <!-- body -->
    <Container></Container>

    <!-- footer -->
    <div class="footer">
      <ul class="footer-button-plus">
        <input type="file" @change = "upload" id="fileUpload" class="input-file"/>
        <label for="fileUpload" class="input-plus">+</label>
      </ul>
    </div>
  </div>
</template>
<script>
import Container from "./components/Container.vue";
import store from "@/store";

export default {
  name: "app",
  components: {
    Container,
  },
  methods:{
    upload(e){
      store.commit('setUrl', URL.createObjectURL(e.target.files[0]));
      store.commit('nextStep');
      console.log(store.state.step);
    }
  }
};
</script>
<style>
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}

.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-right: 20px;
  cursor: pointer;
  margin-top: 10px;
}

.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
  padding-right: 20px;
}

.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.input-file {
  display: none;
}
</style>
