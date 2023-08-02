<template>
  <div class="post">
    <div class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${insta.userImage})` }"
      ></div>
      <span class="profile-name">{{ insta.name }}</span>
      <span>글번호{{ insta.num }}</span>
    </div>
    <div
      :class="insta.filter"
      class="post-body"
      :style="{ backgroundImage: `url(${insta.postImage})` }"
      @dblclick="like"
    ></div>

    <div class="post-content">
        <p>{{ insta.likes }}</p>
        <p><strong>{{ insta.name }}</strong> {{ insta.content }}</p>
        <p class="date">{{ insta.date }}</p>
    </div>
  </div>
</template>
<script>
export default {
  //eslint-disable-next-line
  name: "Post",
  props: {
    insta: Object,
  },
  methods:{
    like(){
      let num=this.insta.num
      this.$store.commit('like',num)
    }
  }
};
</script>
<style>
.post {
  width: 100%;
}
.profile {
  /* background-image: url("https://picsum.photos/100?random=0"); */
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://picsum.photos/600?random=0");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>
