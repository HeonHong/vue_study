<template>
    <div>
        <div :class="`${filter} filter-item`" :style="`background-image:url(${url})`" @click="fire">
            <slot name="a"></slot>
            <!-- <slot name="b"></slot> -->
            <!-- 장점 1. props 없이 데이터 바인딩 가능 2. html자체를 보낼 수 있음 3. slot props로 부모에서 자식 데이터 사용 가능-->
            <!-- 단점 1. 속성에 사용 불가 2.여러개의 데이터 바인딩시 불편-->
            <!-- <slot :msg="msg"></slot> -->
        </div>
        <!-- <div :class="filter" class= "filter-item" :style="`background-image:url(${url})`"></div>/ -->
  </div>
</template>
<script>
export default {
    name:'FilterBox',
    props:{
        url:String,
        filter:String,
    },
    data(){
        return{
            msg:'hello',
        }
    },
    methods:{
        fire(){
            //작명, 데이터
            this.emitter.emit('dataToApp',this.filter)
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
