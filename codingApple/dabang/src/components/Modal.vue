<template>
     <div class="black-bg" v-if="isOpen">
        <div class="white-bg">
          
          <h4 >{{ oneRoomData[clicked].title }}</h4>
          <p>{{ oneRoomData[clicked].content }}</p>
          <p>{{ oneRoomData[clicked].price }}</p>
          <!-- props로 받은 데이터는 read-only라서 받아온 데이터를 수정하면 안된다. -->
          <button @click="$emit('closeModal')">닫기</button>
          <!-- <button @click="isOpen = !isOpen">닫기</button> -->
        </div>
      </div>
</template>
<script>
export default {
    //eslint-disable-next-line
    name:'Modal',
    data(){
        return{
            //사용하는 데이터가 상위에도 있으면 최상위 부모 컴포넌트에 데이터를 정의한다.
        }
    },
    props:{
        //이름 : 자료형
        oneRoomData:Array,
        clicked:Number,
        isOpen:Boolean,
    }
}
</script>
<style>
    
</style>