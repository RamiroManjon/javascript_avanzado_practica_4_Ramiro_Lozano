import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '../components/Portfolio.vue'
import Contact from '../components/Contact.vue'
import ProjectDetail from '../components/ProjectDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Portfolio
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/project/:id',
    name: 'ProjectDetail',
    component: ProjectDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
