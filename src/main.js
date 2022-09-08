import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            component: Home
        },
        {
            path: '/list',
            component: List
        }
    ]
})

createApp(App).use(router).mount('#app')
