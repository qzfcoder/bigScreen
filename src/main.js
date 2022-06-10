import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入echarts
import * as echarts from "echarts"; //引入echarts
Vue.prototype.$echarts = echarts; //注册组件

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
