import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 20,
      likes: 30,
      liked: false,
      more:{}
    };
  },
  mutations: {
    nameChange(state) {
      state.name = "park";
    },
    addAge(state, payload) {
      state.age += payload;
    },
    like(state) {
      if (!state.liked) {
        state.likes++;
        state.liked = !state.liked;
      } else {
        state.likes--;
        state.liked = !state.liked;
      }
    },
    setMore(state, payload){
        state.more=payload
    }
  },
  actions:{
    //ajax코드 작성
    getData(context){
        axios
          .get(`https://codingapple1.github.io/vue/more0.json`)
          .then((res) => {
            console.log(res.data);
            // context=store라고 생각하면 됨
            context.commit('setMore',res.data);
          });
    }
  }
});

export default store;
