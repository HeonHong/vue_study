<template>
  <div>
    <div v-if="step == 0">
      <Post
        v-for="(instaPost, i) in instaData"
        :key="i"
        :instaPost="instaPost"
      />
    </div>

    <div v-if="step == 1">
      <div
        :class="filter"
        class="upload-image"
        :style="`background-image : url(${url})`"
      ></div>
      <div class="filters">
        <FilterBox
          v-for="(items, i) in filterName"
          :filter="items"
          :key="i"
          :url="url"
        >
          <template v-slot:a
            ><span>{{ items }}</span></template
          >
          <!-- <template v-slot:b> 이건 b</template> -->
          <!-- <template v-slot:default="ddd">{{ ddd.msg }}</template> -->
        </FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step == 2">
      <div
        :class="filter"
        class="upload-image"
        :style="{ backgroundImage: `url(${url})` }"
      ></div>
      <div class="write">
        <textarea
          class="write-box"
          :value="content"
          @input="textChange"
        ></textarea>
      </div>
    </div>

    <div v-if="step == 3">
        <MyPage :one="1" :two="2"/>
      </div>
  </div>
</template>
<script>
import Post from "./Post.vue";
import FilterBox from "./Filterbox.vue";
import filterName from "@/assets/filterName";
import MyPage from "./MyPage.vue";

export default {
  //이름 작성할 때 name: " " 형식
  //eslint-disable-next-line
  name: "Container",
  components: {
    Post,
    FilterBox,
    MyPage
  },
  props: {
    instaData: Array,
    step: Number,
    url: String,
    content: String,
    filter: String,
  },
  data() {
    return {
      filterName,
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
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
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
