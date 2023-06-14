<template lang="">
  <div>

    <!-- 모달 -->
    <transition name="fading">
      <Modal v-show="isOpen" :oneRoomData="oneRoomData[clicked]" @closeModal="closeModal()"></Modal>
    </transition>
    
    <!-- discount -->
    <Discount></Discount>

    <!-- 정렬 -->
    <div>
      <button @click="priceSort">가격순 정렬</button>
      <button @click="priceReverseSort">가격 역순 정렬</button>
      <button @click="titleSort">문자 정렬</button>
      <button @click="returnToOriginal">되돌리기</button>
    </div>
    <!-- 메뉴 -->
    <div class="menu">
      <a v-for="(item,index) in menus" :key=index>{{ item }}&nbsp;</a>
    </div>
    
    
    <!-- 제품 -->
    <OneRoom v-for="(item,index) in oneRoomDataCopy" :item="item" :key="index" @click="openModal(index)"/>

  </div>
</template>
<script>

import oneRoomData from './data.js';
import OneRoom from './components/OneRoom.vue';
import Modal from './components/Modal.vue'
import Discount from './components/Discount.vue'
import _ from 'lodash';

export default {
  data(){
    return{
      oneRoomData : oneRoomData,
      isOpen : false,
      clicked:0,
      menus: ['home', 'shop', 'about'],
      //이 부분에 그냥 oneRoomData넣으면 안된다.
      //그럼 위의 oneRoomData랑 공유하는 형식으로 인식된다.
      // oneRoomDataCopy : [...oneRoomData]
      oneRoomDataCopy : _.cloneDeep(oneRoomData)
    }
  },
  // mounted(){
  //   this.oneRoomDataCopy = this.oneRoomData;
  // },
  components:{
    OneRoom,
    Modal,
    Discount
  },
  methods:{
    openModal(index){
      this.isOpen=!this.isOpen;
      this.clicked=index;
    },
    closeModal(){
      this.isOpen=!this.isOpen;
    },
    priceSort(){
      //https://carrotweb.tistory.com/185
      // return this.oneRoomDataCopy = this.oneRoomDataCopy.price.sort();
      return this.oneRoomDataCopy = this.oneRoomDataCopy.sort((a, b) => a.price - b.price);
    },
    priceReverseSort(){
      return this.oneRoomDataCopy = this.oneRoomDataCopy.sort((a,b)=>b.price - a.price);
    },
    titleSort(){
      return this.oneRoomDataCopy = this.oneRoomDataCopy.sort((a, b) => {
        let aTempTitle = a.title.toLowerCase();
        let bTempTitle = b.title.toLowerCase();
        if (aTempTitle < bTempTitle) return -1;
        if (aTempTitle < bTempTitle) return 1;
        return 0;
      });
    },
    returnToOriginal(){
      this.oneRoomDataCopy = [...this.oneRoomData]
    }
  }

}
</script>
<style>
.fading-enter-from{
  transform: translateX(-1000px);
}
.fading-enter-active{
  transition:all 1s;
}
.fading-enter-to{
  transform: translateX(0px);
}
.fading-leave-from{
  transform: translateY(0px);
}
.fading-leave-active{
  transition:all 1s;
}
.fading-leave-to{
  transform: translateX(-1000px);
}


*{
  text-align: center;
}
.black-bg{
  width:100%;
  height:100%;
  position: fixed;
  background: rgba(0,0,0,0.5);
  /* display: flex; */
  /* align-items: center; */
}
.white-bg{
  width:80%;
  border-radius: 5px;
  background-color: white;
  padding : 15px;
}
.discount-box{
  background-color: lightgray;
  border-radius: 5px;
  padding : 15px;
}
.menu{
  background-color: darkslateblue;
  padding : 15px;
  border-radius: 5px;
}
.room-img{
  width : 100%;
}
.menu{
  align-items: center;
  color : white;
}
</style>