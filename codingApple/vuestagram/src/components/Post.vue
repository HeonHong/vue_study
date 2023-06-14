<template lang="">
    <div class="post">
    <div class="post-header">
<!--  내가 한 방식
      <div class="profile">
        <img :src="item.userImage" alt="profileImage">
      </div> -->
      <!-- 이렇게 하면 ()안에만 변수고 나머지는 글자처리 필요
        <div class="profile" :style="background-image : url()"/>
      -->
        <div class="profile" :style="{backgroundImage : `url(${item.userImage})`}"/>
      <span class="profile-name">{{item.name}}</span>
    </div>
    <div class="post-body">
      <img :src="item.postImage" alt="postImage">
    </div>
    <div class="post-content">
      <p>{{item.likes}}</p>
      <p><strong>{{item.name}}</strong> {{item.content}}</p>
      <p class="date">May 15</p>
    </div>
</div> 
</template>
<script>
export default {
    //eslint-disable-next-line
    name:'Post',
    props:{
      item:Object,
    }
}
</script>
<style lang="">

</style>