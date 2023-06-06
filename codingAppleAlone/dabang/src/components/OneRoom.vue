<template lang="">
    <div>
        <img :src="item.image" class='room-img'>
        <div>{{item.title}}</div>
        <div>{{item.price}}원</div>
    </div>
</template>
<script>
export default {
    //eslint-disable-next-ine
    name : 'OneRoom',
    props : {
        item:Object
    },
    
}
</script>
<style lang="">
    
</style>