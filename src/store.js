import { reactive, watch } from 'vue';

const store = reactive({
  code: '',
});
watch(store, newVal => {
  console.log(newVal);
});
export default {
  install(app) {
    app.config.globalProperties.$store = store;
    app.provide('$store', store);
  },
};
