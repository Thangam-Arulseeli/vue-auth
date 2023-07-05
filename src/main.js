import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import { createRouter } from 'vue-router'

// create & config router 
//const router=createRouter({})

// route guards
// router.beforeEach((to, from ) => {})
// router.beforeEach(() => {})

// export config
export default router;

createApp(App).use(router).mount('#app')
