<template lang="">
    <div class="black-bg">
        <div class="white-bg">
            <img :src="oneRoomData.image">
            <h4>{{oneRoomData.title}}</h4>
            <p>{{oneRoomData.price}}원</p>
            <p>{{oneRoomData.content}}</p>

            <input type="text" v-model="month" @input="month=$event.target.value">
            <span> 개월</span><br>
            <p v-show="isContract">{{month}}개월 선택함 : {{month*oneRoomData.price}}원</p>
            <p v-show="!isContract">그거면 우린 뭘 먹고 사나?</p>
            <button @click="$event=> $emit('closeModal')">닫기</button>
        </div>
    </div>
</template>
<script>

export default {
    //eslint-disable-next-line
    name : 'Modal',
    props:{
        // clicked:Number,
        oneRoomData:Object,
    },
    data(){
        return{
            month:12,
            isContract:true,
        }
    },
    watch:{
        month(a,b){
            if(a>=13){
                alert("12개월 이하로만 입력 가능합니다.");
                this.month = b;
            }

            if(isNaN(a)){
                alert("숫자를 입력해야지 이 양반아");
                this.month = b;
            }

        }
    },
    beforeUpdate(){
        if(this.month<=2){
            this.isContract=false;
        }else{
            this.isContract=true;
        }
    }
}
</script>
<style lang="">
    
</style>