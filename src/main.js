import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "../src/assets/Utils/commonStyle/mainStyle.css"
import "../src/assets/Utils/commonStyle/style.css"
import "../src/assets/Utils/commonStyle/courseDisplay.css"
import store from "../src/store/index";
// import "../src/assets/Utils/commonStyle/font_2116643_bi3v6kbxom/iconfont.css"
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(store)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')



