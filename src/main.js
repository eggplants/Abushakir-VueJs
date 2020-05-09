import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// import { EtDatetime, ETC, BahireHasab } from "abusahakir";

Vue.config.productionTip = false

// Vue.use(EtDatetime, ETC, BahireHasab);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
