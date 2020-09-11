import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from "./store/index";
import { EtDatetime, ETC, BahireHasab, ConvertToEthiopic } from "abushakir";

Vue.config.productionTip = false


Object.defineProperty(Vue.prototype, '$etDT', { value: EtDatetime });
Object.defineProperty(Vue.prototype, '$etc', { value: ETC });
Object.defineProperty(Vue.prototype, '$bh', { value: BahireHasab });
Object.defineProperty(Vue.prototype, '$converter', { value: ConvertToEthiopic });

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
