<template lang="">
  <!-- step0 -->
  <div>
    <div v-if="step == 0">
      <Post
        v-for="(insta, index) in instaData"
        :key="index"
        :insta="insta"
      ></Post>
    </div>

    <!-- step1 -->
    <div v-if="step == 1">
      <div
        :class="selectedFilter"
        class="upload-image"
        :style="`background-image : url(${url})`"
      ></div>
      <div class="filters">
        <FilterBox
          v-for="(filter, i) in filterName"
          :filter="filter"
          :url="url"
          :key="i"
        ></FilterBox>
      </div>
    </div>

    <!-- step2 -->
    <div v-if="step == 2">
      <div
        :class="selectedFilter"
        class="upload-image"
        :style="`background-image : url(${url})`"
      ></div>
      <textarea class="write-box" maxlength=10 placeholder="write!" :value="content" @input="textChange"></textarea>
    </div>
  </div>
</template>
<script>
import Post from "./Post.vue";
import filterName from "@/assets/filterName";
import FilterBox from "./FilterBox.vue";

export default {
  //eslint-disable-next-line
  name: "Container",

  components: {
    Post,
    FilterBox,
  },
  props: {
    step: Number,
    url: String,
    instaData: Array,
    selectedFilter: String,
    content: String,
  },
  data() {
    return {
      filterName: filterName,
    };
  },
  methods: {
    textChange(e) {
      this.$emit("text", e.target.value);
    },
  },
};
</script>
<style>
.upload-image {
  height: 450px;
  background-position: center;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  width: 100%;
  white-space: nowrap;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}

</style>
