<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="?" />
    <div class="post-header" v-for="(items, i) in follower" :key="i">
      <div
        class="profile"
        :style="`background-image : url(${items.image})`"
      ></div>
      <span class="profile-name">{{ items.name }}</span>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { computed, onMounted, reactive, ref, toRefs } from "vue";
import { useStore } from "vuex";

export default {
  //eslint-disable-next-line
  name: "MyPage",
  props: {
    one: Number,
    two: Number,
  },
  //   setup(props, context) {
  setup(props) {
    //created랑 비슷하다

    //data
    let follower = ref([]); //primitive 타입에 사용
    let test = reactive({ name: "kim" }); //ref랑 동일한 역할. object, array에 사용
    test;

    //실시간 반영을 원하는 경우 ref를 사용하는데
    //여러 개의 데이터를 담아야하는 경우 toRefs를 사용한다.
    //es6 destructuring 문법
    let { one, two } = toRefs(props);
    console.log(one.value);
    console.log(two.value);

    onMounted(() => {
      axios.get("/follower.json").then((res) => {
        follower.value = res.data;
      });
    });

    // watch(one,()=>{
    //     //변경시 실행하고 싶은 코드
    // });

    let result = computed(() => {
      return follower.value.length;
    });
    console.log(result.value);

    let store = useStore();
    console.log(store.state.name);
    //mapstate같은 것들은 사용 불가능함

    function search(){}

    return { follower,search };
  },
  data() {
    return {};
  },
};
</script>
<style>
/* scooped사용하면 해당 페이지에만 적용하는 css파일 생성 가능 */
</style>
