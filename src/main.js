import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueLoading from 'vue-loading-overlay';
import Toast from 'vue-toastification';
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css';
import '@/assets/css/style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'vue-loading-overlay/dist/vue-loading.css';

const app = createApp(App);

app.use(router);
app.use(store);

/**@type {import('vue-toastification').PluginOptions} */
const ToastOptions = {
  position: 'bottom-right',
  timeout: 3000,
  newestOnTop: false,
  closeOnClick: true,
};
app.use(Toast, ToastOptions);
/**@type {import('vue-loading-overlay').Props} */
const LoadingOptions = {
  color: '#4fc08d',
  backgroundColor: '#0d1117',
  opacity: 0.9,
  lockScroll: true,
  loader: 'dots',
};
app.use(VueLoading, LoadingOptions);
app.directive('focus', {
  mounted(el) {
    el.focus();
  },
});

app.mount('#app');
