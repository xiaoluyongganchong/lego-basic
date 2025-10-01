import { createApp,h } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';
import router from './routes/index';
import store from './store/index'

const app = createApp(App);
app.use(Antd).use(router).use(store);
app.mount('#app');
h('div', { 'class': 'div-test' }, 'hello there')
console.log(h)