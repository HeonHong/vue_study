<template lang="">
    <div>
        <Post v-for="(item,index) in instaData" :item="item" :key="index"></Post>
    </div>
</template>
<script>
import Post from './Post.vue';
export default {
    //eslint-disable-next-line
    name:'Container',
    props:{
        instaData:Array,
    },
    components:{
        Post:Post,
    },

}
</script>
<style lang="">
    
</style>