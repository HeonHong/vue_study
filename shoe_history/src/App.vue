<template lang="">
  <div>
    <StarBackground v-for="n in iterateNum" :key="n"></StarBackground>
    <CardForm></CardForm> 
  </div>
</template>
<script>
import CardForm from './components/CardForm.vue';
import StarBackground from './components/StarBackground.vue';
export default {
  name: 'App',
  components:{
    CardForm,
    StarBackground
  },
  data(){
    return{
      iterateNum:1000,
    }
  }
}
</script>
<style lang="">

</style>