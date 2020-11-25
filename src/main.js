import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './css/style.scss'
import './view/hello.vue'

new Vue({
    router,
    render: h => h(App)
}).$mount("#app")
