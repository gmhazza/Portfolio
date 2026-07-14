import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('/src/components/home.vue'),
    },
    {
      path: '/experinces',
      name: 'Experinces',
      component: () => import('/src/components/experinces.vue'),
    },
    {
      path: '/certificates',
      name: 'Certificates',
      component: () => import('/src/components/certificates.vue'),
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('/src/components/projects.vue'),
    },
    {
      path: '/skills',
      name: 'Skills',
      component: () => import('/src/components/skills.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('/src/components/about.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404Page',
      component: () => import('/src/components/notfound.vue'),
    },
  ],
})

export default router
