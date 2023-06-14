<template>
  <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li>Next</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <Container :instaData="instaData"/>
    <button @click="more">더보기</button>

    <div class="footer">
      <ul class="footer-button-plus">
        <input type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
   </div>
</template>

<script>
import Container from './components/Container.vue';
import instaData from './assets/instaData.js';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Container: Container
  },
  data(){
    return{
      instaData:instaData,
      count:0,
    }
  },
  methods:{
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.count}.json`)
      .then(
        result=>{
          this.instaData.push(result.data);
          this.count++;
        }

        //여기서 arrow function을 사용해야하는 이유
        // function(result){
        //   this.instaData.push(result.data);
        //    위 this가 재정의 된다. arrow function은 재정의 하지 않음
        // }
        
      )          
    }
  }
}
</script>

<style>
@import 'style.css'
</style>
