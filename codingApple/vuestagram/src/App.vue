<template lang="">
  <div class="header">
    <ul class="header-button-left">
      <li @click="step = 0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">Publish</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <!--   예시로 작성한 것이지만 vuex 관습상 컴포넌트 내에서 직접적으로 데이터 변경은 하지 않는다.
  따라서 1. store.js에서 수정 방법 정의
  2. 컴포넌트에서 그 방법을 사용하여 수정(store.js에 부탁)
  <h4>안녕 {{ $store.state.name }}</h4>
  <button @click="$store.state.name='park'">버튼</button> -->

  <!-- <h4>안녕 {{ $store.state.name }}</h4>
  <button @click="$store.commit('nameChange')">버튼</button>
  <h4>난 {{ $store.state.age }}살이야</h4>
  <button @click="$store.commit('addAge', 10)">버튼</button> -->

  <!--mapMutations로 대체  -->
  <!-- <h4>난 {{ $store.state.age }}살이야</h4>
  <button @click="addAge(10)">버튼</button> -->

  <!-- <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기 버튼</button> -->

  <!-- <Container :instaData="instaData" :step="step" :url="url" :content="content" @text="(e)=>content=e"/> -->
  <Container
    :instaData="instaData"
    :step="step"
    :url="url"
    :content="content"
    @text="textChange"
    :filter="filter"
  />
  <button @click="more">더보기</button>

  <!-- <p>{{now()}} {{counter}}</p> -->
  <!-- now2는 소괄호 없이 작성. 계산한 state값을 가진다고 생각하면 된다. 일종의 데이터 값 -->
  <!-- 재렌더링한다고 값이 계속 변하는 것이 아니다. -->
  <!-- <p>{{now2}} {{counter}}</p> -->
  <!-- <button @click="counter++">버튼</button> -->

  <div class="footer">
    <ul class="footer-button-plus">
      <!-- image만 받는 제한은 아니고 이미지 파일만 뜨게끔 설정하는 것이라서 근본적인 해결책은 아니다. -->
      <input
        @change="upload"
        type="file"
        accept="image/*"
        multiple
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <!-- <div v-if="step == 0">내용0</div>
  <div v-if="step == 1">내용1</div>
  <div v-if="step == 2">내용2</div>

  <button @click="showing(0)">버튼0</button>
  <button @click="showing(1)">버튼1</button>
  <button @click="showing(2)">버튼2</button> -->
</template>

<script>
import Container from "./components/Container";
import instaData from "./assets/InstaData";
import axios from "axios";
import {mapMutations, mapState} from 'vuex'

export default {
  name: "App",
  components: {
    Container,
  },
  //부모 컴포넌트
  mounted() {
    this.emitter.on("dataToApp", (filter) => {
      this.filter = filter;
    });
  },
  data() {
    return {
      instaData,
      clicked: 0,
      isShow0: true,
      isShow1: false,
      isShow2: false,
      step: 0,
      url: "",
      content: "write!",
      filter: "",
      counter:0,
    };
  },
  computed: {
    //처음 로드 됐을 때, 해당 값을 가지고 있는다. 사용한다고 무조건 재실행하지 않는다.
    //주는 데이터 값이 바뀌면 새로 진행
    //계산 결과 저장용 함수
    // now2(){
    //   return new Date();
    // }
    // ex 게시물 양이 엄청 많을 때, 일부 데이터만 가지고 계속 변형이나 특정 작업을 하는 경우.

    //일반적으로 store의 값을 이용할 때 computed에 저장하고 사용한다.
    // name(){
    //   //항상 계산된 값을 리턴 시켜줘야한다.
    //   return this.$store.state.name
    // },

    //vuex state를 한 번에 꺼내쓰는 문법
    //spread랑 같이 쓰면 store에 있는 state 값 다 복사
    //위의 name처럼 작성하지 않고 사용 가능
    ...mapState(['name','age','likes']),
    //다른 이름으로 작성하고 싶은 경우에 object형으로 작성
    ...mapState({named:'name'}),
  },
  methods: {
    //mutations 사용 원하는 경우. mapActions도 가능
    ...mapMutations(['setMore','like','addAge']),


    // now(){
    //   return new Date();
    // },
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.clicked++}.json`)
        .then((res) => {
          //function대신 arrow function 사용하면 안에서 this가 바깥의 데이터를 의미한다.
          //function은 this를 재정의한다.
          this.instaData.push(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // showing(num){
    //   // console.log(num);
    //   this.step=num;
    // },
    upload(e) {
      // const file = e.target.files[0];
      // const ext = file.name.split(".").pop();
      // 유효성 검사 다시 만들어보기
      // if (!['gif', 'jpg', 'jpeg', 'png', 'bmp' ,'ico', 'apng'].includes(ext)) {
      //   alert("허용되지 않는 파일 형식입니다.");
      // }

      //e.target.files를 통째로 넣으려고 하면 안됨.
      //binary데이터를 다룰 때 blob이라는 object에 넣는다.
      this.url = URL.createObjectURL(e.target.files[0]);
      this.step++;
    },
    publish() {
      var myPost = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.url,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.content,
        filter: this.filter,
      };
      //array의 첫번째에 자료추가
      this.instaData.unshift(myPost);
      this.step = 0;
      this.filter = "";
    },
    textChange(changedText) {
      this.content = changedText;
    },
  },
};
</script>
<style>
/* @import 'style.css'; */

body {
  margin: 0;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}

</style>
