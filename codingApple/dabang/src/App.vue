<template>


  <!-- <div :style="{display:1==2?'flex':'none'}">
    스타일 적용이 그냥 갑자기 궁금해서 적용해 봄
  </div> -->
  <!-- html -->
    <Discount></Discount>
    <!-- <Discount :name="object1.name" :age="object1.age"></Discount>
    <Discount v-bind="object1"></Discount> -->
    <Modal :oneRoomData="oneRoomData" :isOpen="isOpen" :clicked="clicked" @closeModal="isOpen=!isOpen"></Modal>
    <div class="menu">      
      <!-- <a v-for="작명 in 반복횟수"  :key="작명">Home</a> -->
      <!-- key 필수. 반복문 요소들을 컴퓨터가 구분하기 위해서 사용 -->
      <!-- <a v-for="작명 in 3"  :key="">Home</a> -->
   
      <!-- array -->
      <a v-for="(a, i) in menus" :key="i"  >{{ a }}</a>
      <!-- <a href="">Products</a>
    <a href="">About</a> -->
    </div>

    <!--작명='문자형 자료' :작명="숫자형자료"-->
    <Card v-for="(item,index) in oneRoomData" :item="item" :key="index" @openModal="isOpen=true;this.clicked=index;" ></Card>
    <!-- '$event' 에 자식이 보낸 데이터가 담겨있다.-->
    <Card v-for="(item, index) in oneRoomData" :item="oneRoomData[index]" @openModal="isOpen = true; clicked=$event" :key="index"></Card>

  <!-- <div> -->
    <!-- ./은 webpack 문법이다. -->
    <!-- <img src="./assets/images/room0.jpg" class="room-img"> -->
    <!-- html 속성도 데이터 바인딩 가능 :속성 ="데이터 이름" -->
    <!-- <h4 :style="color" @click="isOpen=!isOpen">{{ products[0] }}</h4> -->
    <!-- 데이터 바인딩 사용 이유 -->
    <!-- 1. 가변적인 데이터 변경이 쉽기 때문에 사용 -->
    <!-- 2. [중요]실시간 자동 렌더링 때문에 사용   -->
    <!-- <p>{{ price1 }} 만원</p> -->
    <!-- 전통방식 <button onclick="">허위매물 신고 버튼</button><span>신고수 : 0</span> -->
   <!--  <button v-on:click="자바스크립트">허위매물 신고 버튼</button><span>신고수 : 0</span> -->
    <!-- <button @click="report++">허위매물 신고 버튼</button><br>
    <button @mouseover="report++">허위매물 신고 mouseover</button><br>
    <button @click="increase1">허위매물 신고 버튼</button><br>
    <span>신고수 : {{ report[0] }}</span>
  </div>
  <div>
    <img src="./assets/images/room1.jpg" class="room-img">
    <h4 :style="color">{{ products[1] }}</h4>
    <p>{{ price2 }} 만원</p>
    <button @click="increase2">허위매물 신고 버튼</button><br>
    <span>신고수 : {{ report[1] }}</span>
  </div>
  <div>
    <img src="./assets/images/room2.jpg" class="room-img">
    <h4 :style="color">{{ products[2] }}</h4>
    <p>{{ price2 }} 만원</p>
    <button @click="increase3">허위매물 신고 버튼</button><br>
    <span>신고수 : {{ report[2] }}</span> 
  </div> -->

 
 
    <!-- 
<div v-for="(item, index) in products" :key="item">
  <div>{{ item }}</div>
  <div>{{ price[index] }}만 원</div>
</div>
     -->
</template>

<script>
// javascript
// import 예시
// import apple from 위치
// import {apple, apple2} from 위치

import data from './data.js';
import Discount from './components/Discount.vue';
import Modal from './components/Modal.vue';
import Card from './components/Card.vue';

//동적 UI 만드는 법
//1. UI현재 상태를 데이터로 저장해둠(script에 정보 저장)
//2. 데이터에 따라 UI가 어떻게 보일지 작성
export default {
  name: 'App',
  data(){
    return{
      //여기에 변수 다 만들면 됨
      //데이터는 object 자료형으로 삽입
      price1 : 80,
      price2 : 70,
      color: 'color:blue',
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      menus : ['home','shop','about'],
      report :[0,0,0],
      isOpen:false,
      oneRoomData:data,
      clicked:0,
      object1:{name:'kim', age:20}
    }
  },
  methods:{
    increase1(){
      this.report[0]+=1;
    },
    increase2() {
      this.report[1] += 1;
    },
    increase3() {
      this.report[2] += 1;
    }
  },
  components: {
    Discount,
    Modal,
    Card
  }
}
</script>

<style>
/* css */

body{
  margin:0;
}
div{
  box-sizing:border-box;
}
.black-bg{
  width:100%;
  height:100%;
  background: rgba(0,0,0,0.5);
  position:fixed;
  padding:20px;
}
.white-bg{
  width:100%;
  background:white;
  border-radius:8px;
  padding:20px;
}

.room-img{
  width:100%;
  margin-top:40px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



.menu{
  background : darkslateblue;
  padding : 15px;
  border-radius: 5px;
}
.menu a{
  color : white;
  padding : 10px;
}



</style>
