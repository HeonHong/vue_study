<template>

        <!-- 속성 안에 데이터 바인딩하고 싶으면 : 꼭 붙이기 -->
        <img :src="item.image" class="room-img">
        <!--<h4 :style="color" @click="isOpen = !isOpen; clicked = index">{{ item.title }}</h4>-->
        <h4>{{ item.title }}</h4>
        <p>{{ item.price }} 만원</p>

</template>
<script>

export default {
    //eslint-disable-next-line
    name:'Card',
    props:{
        //자료형을 선언해주는 이유는 코드가 길어지면 버그가 생길 수 있는데 그것을 방지하기 위함이다.
        item:Object,
    }
    
}
</script>
<style>
    
</style>