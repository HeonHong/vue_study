<template lang="">
    <!-- $route를 사용하면 현재 url 정보 확인 가능 -->
    <!-- {{$route.params.num}} -->
    <div>
        <h4>상세페이지</h4>
        <h5>{{blogData[$route.params.num].title}}</h5>
        <p>{{blogData[$route.params.num].content}}</p>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    //eslint-disable-next-line
    name:'Detail',
    props:{
        blogData:Array,
    }
    
}
</script>
<style lang="">
    
</style>