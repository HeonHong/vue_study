//import from 뒤가 경로가 아닌 경우는 library를 import해서 쓰는 것이다.
// import { createRouter, createWebHashHistory } from "vue-router";
import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Head from './components/Head.vue';
import Detail from './components/Detail.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';

const routes = [
  
  {
    path: "/list",
    component: List
  },
  {
    path: "/",
    component: Head
  },
  {
    //콜론 문법을 사용하면 해당하는 id에 맞는 페이지로 이동
    //url parameter문법
    //정규식으로 엄격한 규칙을 만들어줄 수도 있음. 아래는 숫자만 가능한 정규식임
    path: "/detail/:num(\\d+)",
    component: Detail,
    //nested routes
    children:[
      {
        // path:"/author",
        // path는 상대경로로 작성해줘야한다.
        // /author로 작성하면 절대경로라서 home부터 찾기 시작한다.
        // [Vue Router warn]: Absolute path "/author" must have the exact same param named "num" as its parent "/detail/:num(\d+)".
        path:"author",
        component: Author
      },
      {
        // path:"/comment",
        path:"comment",
        component: Comment
      }
    ]
  },
  {
    // 이런 식으로 몇 개 컴포넌트를 한 번에 넣어주는 방법도 있다.
    path:"/everything",
    component:{
      List : List,
      Comment : Comment
    }
  },
  // {
    // 나중에 404페이지 만들때 쓸 수 있음
    // 아래는 정규식으로 모든 문자일 때라는 조건인데 위 컴포넌트들이 우선권을 가지기 때문에 위에 것들 중에 없으면 404로 안내
    // 따라서 순서 중요!!!
  //   path: "/:anything(.*)",
  //   component: 404
  // },
];

//router생성 함수
const router = createRouter({
    //설정 object
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes,
});

export default router; 