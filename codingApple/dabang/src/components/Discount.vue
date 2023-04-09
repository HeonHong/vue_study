<template>
    <div class="discount">
     <h4>지금 구매시 {{percentage}}% 할인</h4>
    </div>
</template>
<script>
export default {
    //eslint-disable-next-line
    name:'Discount',
    data(){
      return{
        percentage:5,
      }
    },
    mounted(){
      //참고. http://yoonbumtae.com/?p=1168
      var interval=setInterval(() => {
        if(this.percentage>0){
          this.percentage--;
          // console.log(this.percentage);
        }else{
          clearInterval(interval);
        }

      }, 1000);
    }
    
    
}
</script>
<style >
.discount{
  background : #eee;
  padding : 10px;
  margin : 10px;
  border-radius: 5px;
}
</style>