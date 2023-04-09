<template>
     <div class="black-bg" v-if="isOpen">
        <div class="white-bg">
          
          <h4 >{{ oneRoomData[clicked].title }}</h4>
          <p>{{ oneRoomData[clicked].content }}</p>

          <!-- @input은 input 이벤트 핸들러로 input에 데이터가 들어오면 반응하게 만들어 준다. -->
          <!-- @change 입력하고 커서를 다른 곳을 찍으면 javascript 실행하라는 의미이다. -->
          <!-- $event는 이벤트 리스너이다. event listener : click, mouseover와 같은 이벤트를 실행시켰을 때, 함수를 실행하는 것. 
            $event.target : 현재 이벤트가 발생하고 있는 요소-->
          <input type="text" v-model="month" @input="month=$event.target.value"><br>
          <!-- v-model 사용하는 2가지 이유
            1.input에 값을 입력하면 data에 저장하게 하는 directive이다 -->
          <!-- <input v-model.number="month"><br>
          <textarea v-model="month"></textarea><br>
          <select v-model="month">
            <option value="222">222</option>
            <option value="333">333</option>
            위와 동일하게 출력함
            <option>222</option> 
            <option>333</option>
            
            </select>

          <input  v-model="month" type="range" min="1" max="12"> -->

          <p v-show="isContract">{{month}} 개월 선택함 : {{ oneRoomData[clicked].price *  month}}</p>
          <p v-show="!isContract">에이 2개월 미만이면 우린 뭘 먹고 삽니까</p>
          
          
          
          <!-- props로 받은 데이터는 read-only라서 받아온 데이터를 수정하면 안된다. -->
          <button @click="$emit('closeModal')">닫기</button>
          <!-- <button @click="isOpen = !isOpen">닫기</button> -->
        </div>
      </div>
</template>
<script>
export default {
    //eslint-disable-next-line
    name:'Modal',
    data(){
        return{
            //사용하는 데이터가 상위에도 있으면 최상위 부모 컴포넌트에 데이터를 정의한다.
            //초기값이 숫자라도 위에서 받는 숫자가 문자로 받아지기 때문에 바인딩이 안되는 경우가 발생할 수 있다.
            //위에서 *대신 +로 했을 때, 문자처럼 받는 것을 확인할 수 있다.
            //v-model.number은 숫자를 문자로 인식하지 않고 숫자로 온전히 받을 수 있게 만드는 것이다.
            month: 12,
            date:123,
            monthCopy:1,
            isContract: true,
        }
    },
    props:{
        //이름 : 자료형
        oneRoomData:Array,
        clicked:Number,
        isOpen:Boolean,
       
    },
    watch: {
    //watcher : 데이터를 감시하는 함수
    //함수명은 항상 데이터 이름과 동일하게 작성한다.
      month(a,b){

        
        //month라는 데이터가 변경될 때마다 이 내부 코드가 실행된다.
        //a는 month input으로 받은 데이터. 변경 후 데이터
        //b는 변경 전 month 데이터
        if(a>=13){
          alert('12개월 미만으로만 가능합니다.');
          this.month=b;
        }

        //form validation으로 유효성 검사를 해도 된다.

        if(isNaN(a)){
          alert('숫자만 입력 가능합니다.');
          this.month=b;
        }
        this.monthCopy = b;
      },
      
  },//watch
  beforeUpdate() {
     if (this.month <= 2) {
      
      this.isContract=false;
    }else{
      this.isContract=true;
    }
  },

   
}
</script>
<style>
    
</style>