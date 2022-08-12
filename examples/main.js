import Vue from 'vue'
import App from './App.vue'

import '../components/css/demo.scss';
import '../components/css/card.scss';
import Demo from '../components/lib/demo/index';
import Card from '../components/lib/card/index';


Vue.use(Card);
Vue.use(Demo); //Vue.use() -> Demo.install -> Vue.component()

// import 'gxw-component-ui/dist/css/index.css';
// import GXW from 'gxw-component-ui';
// Vue.use(GXW);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
