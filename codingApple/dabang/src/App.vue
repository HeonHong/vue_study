<template>


  <!-- <div :style="{display:1==2?'flex':'none'}">
    스타일 적용이 그냥 갑자기 궁금해서 적용해 봄
  </div> -->
  <!-- html -->
    <Discount v-if="showDiscount"></Discount>
    <button @click="priceSort">가격순 정렬</button>
    <button>가격 역순 정렬</button>
    <button>문자 정렬</button>
    <button @click="sortBack">되돌리기</button>
    <!-- <Discount :name="object1.name" :age="object1.age"></Discount>
    <Discount v-bind="object1"></Discount> -->
    <!-- class명을 조건부로 데이터 바인딩을 해줘서 isOpen이 true이냐 여부에 따라 클래스가 적용 -->
    <!-- <div class="start" :class="{end:isOpen}">
      <Modal :oneRoomData="oneRoomData" :isOpen="isOpen" :clicked="clicked" @closeModal="isOpen=!isOpen"></Modal>
    </div> -->

    <!-- v-if로 나오고 안나오고를 전환하는 경우에 많이 사용된다. -->
    <transition name="fade">
        <Modal :oneRoomData="oneRoomData" :isOpen="isOpen" :clicked="clicked" @closeModal="isOpen = !isOpen"></Modal>
    </transition>

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
    <!-- <Card v-for="(item, index) in oneRoomData" :item="oneRoomData[index]" @openModal="isOpen = true; clicked=$event" :key="index"></Card> -->

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
      object1:{name:'kim', age:20},
      showDiscount:true,
      //oneRoomOriginal:data,
      //oneRoomData 와는 별개의 데이터의 사본을 만들어 달라는 의미이다
      //그냥 data로만 쓰면 그냥 oneRoomData와 데이터를 공유한다는 의미가 된다
      oneRoomOriginal:[...data],
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
    },
    priceSort(){
      //sort는 문자 정렬이다.
      //원본 훼손됨
      //filter,map등은 원본을 보존한다.
      this.oneRoomData.sort(function(a,b){
        return a.price-b.price;
      });
    },
    sortBack(){
      //등호로 데이터 집어 넣으면 버튼이 첫번째만 먹히고 이후부터는 작동하지 않는다.
      //왜냐하면 등호를 하게되면 이후부터는 데이터를 공유해달라는 의미가 되기 때문이다.
      // this.oneRoomData=this.oneRoomOriginal;

      this.oneRoomData=[...this.oneRoomOriginal];
    }
  },
  created(){
    //mounted나 여기에서 ajax, axios로 데이터 가져온다
  },
  mounted(){
    //몇 초 뒤에 실행되는 함수
    // setTimeout(function(){
    //   this.showDiscount=false;
    // },2000);

    //arrow function 사용하지 않으면 제대로 this를 인식하지 못할 수도 있음.
    // setTimeout(()=> {
    //   this.showDiscount = false;
    // }, 2000);
  },
  components: {
    Discount,
    Modal,
    Card
  },
  watch:{
    //watcher : 데이터를 감시하는 함수

  }
}
</script>

<style>
/* css */
.fade-enter-from{
  /* transition에 사용됨 */
  /* vue에서만 사용되는 문법 */
  transform: translateY(-10000px);
}
.fade-enter-active{
  transition:all 1s;
}
.fade-enter-to{
  transform: translateY(0px);
}

.fade-leave-from{
  /* transition에 사용됨 */
  /* vue에서만 사용되는 문법 */
  opacity: 1;
}
.fade-leave-active{
  transition:all 5s;
}
.fade-leave-to{
  opacity: 0;
}
.start{
  opacity: 0;
  transition: all 1s;
}

.end{
  opacity: 1;
}

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
