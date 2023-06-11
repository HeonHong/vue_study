<template lang="">
    <div v-for="(item,index) in blogData" :key="index">
        <h4>{{item.title}}</h4>
        <p>{{item.date}}</p>
    </div>
</template>
<script>
export default {
    //eslint-disable-next-line
    name : 'List',
    props:{
        blogData:Array
    }
}
</script>
<style lang="">
    
</style>