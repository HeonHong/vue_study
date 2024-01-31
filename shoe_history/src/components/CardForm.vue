<template>
    <div>

        <div class="card-container" ref="cardDiv" @mousemove="tilt" @mouseleave="setBack" >
            <img class="card-image"/>
        </div>
        <!-- <div class="card-container" ref="cardDiv2" @mousemove="tilt2" >
            <img class="card-image"/>
        </div> -->
     
    </div>
</template>
<script>
export default {
    name: 'CardForm',
    data(){
        return{
        }
    },
    methods:{
        tilt(e){
                
                let x = e.pageX;
                let y = e.pageY;
    
                let cardDiv = this.$refs.cardDiv;
                let rect = cardDiv.getBoundingClientRect();
                let top = rect.top+window.scrollY;
                let left= rect.left+window.scrollX;
            
                let rotateX = (y-top)/30-10
                let rotateY = (x-left)/40-10

                cardDiv.style.transform = `perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                console.log('rotateX',rotateX, 'rotateY', rotateY);
            

        },
        setBack(){
            let cardDiv = this.$refs.cardDiv;
            cardDiv.style.transform = `perspective(300px) rotateX(0deg) rotateY(0deg)`;
        },
       
    }

    
}
</script>
<style>
    .card-container{
        position: absolute;
        display:flex;
        justify-content: center;
        align-items: center;
        width: 600px;
        height: 800px;
        background-color: blue;
        transition: all 0.1s;/* transition 없을 경우 튀기는 현상 일어남 */
    }
    .card-image{
        position:absolute;
        background-image:url("../assets/그림1.png");
        background-size: cover;
        width: 400px;
        height:400px;
    }
</style>