import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './main.css'
// import VueMeta from 'vue-meta'
import { createMetaManager, defaultConfig, deepestResolver } from 'vue-meta'
const app = createApp(App);
app.use(router)
// app.use(VueMeta)
app.use(createMetaManager(defaultConfig, deepestResolver))
app.mount('#app')