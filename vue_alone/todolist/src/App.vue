<template>
  <div>
    <ul>
        <Todo v-for="sendItem in sending" :sendItem="sendItem" :key="sendItem"></Todo>
    </ul>
    <input type="text" v-model="listing" v-on:keydown.enter="adding" />
    <button @click="adding">추가</button>

  </div>
</template>
<script>

import Todo from './components/Todo.vue';

export default {
  name:'App',
  data(){
    return{
      listing:'',
      sending:[],
    }
  },
  methods:{
    adding(){
      this.sending.push(this.listing);
      this.listing='';
    }
  },
  components:{
    Todo,
  }
}
</script>
<style>
  
</style>