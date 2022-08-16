import Vue from 'vue'
import App from './App.vue'

import '../components/css/index.scss';
import GXW from '../components/lib/index';


Vue.use(GXW); //Vue.use() -> Demo.install -> Vue.component()

// import 'gxw-component-ui/dist/css/index.css';
// import GXW from 'gxw-component-ui';
// Vue.use(GXW);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
