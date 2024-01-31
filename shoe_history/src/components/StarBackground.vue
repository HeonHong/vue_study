<template lang="">
    <!-- <div class="star" ref="star" :style="{ fontSize: `${size}px`, animationDelay:`${delay}s` }"> -->
    <div class="star" ref="star" :style="{ fontSize: `${size}px`, opacity: `${opacity}`, top:`${top}px`, left:`${left}px`}">
    ★
    </div> 
</template>
<script>
export default {
    name:'StarBackgorund',
    data(){
        return{
            size:0,
            opacity: 0.8,
            timer: null,
            top:0,
            left:0,
        }
    },
    methods:{
        setData(){
            this.size = Math.random()*10;
            this.delay= Math.random()*5;
            this.top = Math.random()*innerWidth;
            this.left= Math.random()*innerHeight;
        },
         toggleOpacity(){ // 추가된 부분
            this.opacity = this.opacity === 0.8 ? 0.2 : 0.8;
        }

    },
    mounted(){
        this.setData();
        // setTimeout(() => { // 추가된 부분
        //     setInterval(this.toggleOpacity, 5000);
        // }, Math.random() * 500);
        this.timer = setInterval(this.toggleOpacity, Math.random() * 3000); // 수정된 부분
    },
    beforeUnmount(){ // 추가된 부분
        clearInterval(this.timer);
    }
}
</script>
<style>
.star{
    position: relative;
    color:blue;
    text-shadow: 0 0 5px blue;
    /* animation: glow 10s infinite; 애니메이션 추가 */
    transition: opacity 5s;
}
/* @keyframes glow {
    0% { opacity: 0.5; }
    25% { opacity: 0.75; }
    50% { opacity: 1; }
    75% { opacity: 0.75; }
    100% { opacity: 0.5; }

} */
</style>