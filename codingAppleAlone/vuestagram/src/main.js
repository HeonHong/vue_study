import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import mitt from 'mitt';

let app=createApp(App)
let emitter=mitt();
app.config.globalProperties.emitter=emitter;

app.use(store).mount("#app");