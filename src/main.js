import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 引入echarts
import * as echarts from "echarts"; //引入echarts
Vue.prototype.$echarts = echarts; //注册组件
Vue.use(ElementUI);
Vue.config.productionTip = false;
// Vue.prototype.$echarts = function (el) {
//   return echarts.init(el, null, {renderer: 'svg'})
// }
new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
