<template lang="">
  <div>
    <div v-if="step==0">
      <Post v-for="(insta, index) in instaData" :key="index" :insta="insta"></Post>
    </div>
    {{step}}
    <div v-if="step==1">
        <div
        class="upload-image"
        :style="`background-image : url(${url})`"
      ></div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import Post from "./Post.vue";

export default {
  //eslint-disable-next-line
  name: "Container",

  components: {
    Post,
  },
  data() {
    return {
      instaData: store.state.instaData,
      step: store.state.step,
      url: store.state.url,
    };
  },
};
</script>
<style></style>
