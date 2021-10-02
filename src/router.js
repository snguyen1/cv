import { createRouter, createWebHistory } from 'vue-router'

const routes = []

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL || 'localhost'),
    routes
})

export default router