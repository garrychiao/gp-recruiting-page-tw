import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
//
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import NProgress from 'nprogress'
NProgress.configure({
  showSpinner: false,
})
import Headroom from 'headroom.js'
//
import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/typography.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import '@/styles/scss/main.scss'
//
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router,
  created() {
    NProgress.start()
  },
  mounted() {
    const header = document.querySelector('header')
    const headroom = new Headroom(header)
    headroom.init()
  },
  components: { App },
}).$mount('#app')
