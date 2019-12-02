require("./bootstrap");

import Vue from "vue";
import router from "./router";
import App from "../components/App";
import CarbonComponentsVue from "@carbon/vue";
import chartsVue from "@carbon/charts-vue";

Vue.use(CarbonComponentsVue);
Vue.use(chartsVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
