import { createStore } from "vuex";
import instaData from "./assets/instaData";

const store = createStore({
  state() {
    return {
      instaData: instaData,
      num: 4,
    };
  },
  mutations: {
    publish(state, payload) {
      let newData = {
        name: "Honey",
        userImage: "https://picsum.photos/100?random=5",
        postImage: payload.url,
        likes: 0,
        date: "Apr 4",
        liked: false,
        content: payload.content,
        filter: payload.selectedFilter,
        num: state.num++,
      };

      state.instaData.unshift(newData);
    },
    like(state, payload) {
      let index = state.instaData.findIndex((item) => item.num === payload);
      
      if (!state.instaData[index].liked) {
        state.instaData[index].likes++;
        state.instaData[index].liked=true;
      } else {
        state.instaData[index].likes--;
        state.instaData[index].liked=false;
      }
    },
  },
  actions: {},
});
export default store;
