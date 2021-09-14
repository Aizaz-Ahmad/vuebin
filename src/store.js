import { reactive } from 'vue';

const store = reactive({
  code: '',
});

export default {
  install(app) {
    app.config.globalProperties.$store = store;
    app.provide('$store', store);
  },
};
