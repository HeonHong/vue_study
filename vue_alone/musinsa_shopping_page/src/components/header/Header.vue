<template>
  <div class="header-wrapper">
    <h1>MUSINSA</h1>&nbsp;&nbsp;&nbsp;
    <input class="search-input">
    <div class="search-button"></div>
    <Rank></Rank>
  </div>
</template>
<script>
import Rank from './Rank.vue';

export default {
    //eslint-disable-next-line
    name: "Header",
    components: { Rank },
};
</script>
<style>
.header-wrapper{
  background-color: black;
  color:white;
  display:flex;
  flex-direction: row;
  flex-wrap:nowrap;
  /* align-content: center; */
  align-items: center;
}
.search-input{
  height:25px;
  width:300px;
}
.search-button{
  background-image: url('@/assets/searchIcon.png');
  width:28px;
  height:28px;
  background-position: center;
  background-size: cover;
  border: 1px solid grey;
  border-left: 0px;
  padding:0.5px;
}
</style>
