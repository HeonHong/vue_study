<template lang="">
  <div
    :class="`${filter} filter-item`"
    :style="`background-image:url(${url})`"
    @click="fire"
  ></div>
</template>
<script>
export default {
  name: "FilterBox",
  props: {
    filter: String,
    url: String,
  },
  methods:{
    fire(){
        this.emitter.emit('selectedFilter', this.filter)
    }
  }
};
</script>
<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
