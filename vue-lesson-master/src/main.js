import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import MyInput from '@/components/ui/my-input.vue'
import MyLabel from '@/components/ui/my-label.vue'
import MyEmail from '@/components/ui/my-email.vue'
import MyTel from '@/components/ui/my-tel.vue'

Vue.config.productionTip = false

Vue.component('my-input', MyInput)
Vue.component('my-label', MyLabel)
Vue.component('my-email', MyEmail)
Vue.component('my-tel', MyTel)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
