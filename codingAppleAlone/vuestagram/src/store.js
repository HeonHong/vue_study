import { createStore } from "vuex";
import instaData from "./assets/instaData";

const store = createStore({
  state() {
    return {
      instaData: instaData,
      step: 0,
      url:'',
    };
  },
  mutations: {
    nextStep(state) {
      state.step++;
    },
    setUrl(state, payload){
        // console.log(payload);
        state.url=payload
    }
  },
  actions: {},
});
export default store;
