import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'//라이브러리 import는 경로 없음
import store from './store';
import './registerServiceWorker'

let emitter =mitt();
//모든 컴포넌트가 사용하게하길 원하는 경우 아래같이 설정
let app = createApp(App);//vue 설정 다루는 부분
app.config.globalProperties.emitter = emitter;//app.config.globalporperties 글로벌 변수 관리

// createApp(App).mount('#app')
app.use(store).mount('#app')
