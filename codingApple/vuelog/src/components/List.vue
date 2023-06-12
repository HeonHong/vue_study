<template lang="">
    <div v-for="(item,index) in blogData" :key="index">
        <h4 @click="$router.push(`/detail/${index}`)">{{item.title}}</h4>
        <h4 @click="pageTransfer(index)">{{item.title}}</h4>
        <p>{{item.date}}</p>
    </div>
</template>
<script>
export default {
    //eslint-disable-next-line
    name : 'List',
    props:{
        blogData:Array
    },
    methods:{
        pageTransfer(index){
            this.$router.push(`/detail/${index}`)
        }
    }
}
</script>
<style lang="">
    
</style>