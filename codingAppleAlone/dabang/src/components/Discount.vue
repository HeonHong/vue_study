<template lang="">
    <div class="discount-box">
        지금 구매시 {{percentage}} %할인
    </div>
</template>
<script>
export default {
    //eslint-disable-next-line
    name:'Discount',
    data(){
        return{
            percentage:5
        }
    },
    mounted(){
        var interval=setInterval(()=>{
            if(this.percentage>0){
                this.percentage--;
            }else{
                clearInterval(interval);
            }
            
        },1000)
    }
}
</script>
<style lang="">
    
</style>