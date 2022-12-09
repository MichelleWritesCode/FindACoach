import { createWebHistory, createRouter } from 'vue-router';

import store from './store/index.js';

//you can import components like you see below; this will render components only when you need them (won't render all the components all the time)
const CoachDetails = () => import('./pages/coaches/CoachDetails.vue');
const CoachesList = () => import('./pages/coaches/CoachesList.vue');
const CoachRegistration = () => import('./pages/coaches/CoachRegistration.vue');
const ContactCoach = () => import('./pages/requests/ContactCoach.vue');
const RequestsList = () => import('./pages/requests/RequestsList.vue');
const NotFound = () => import('./pages/NotFound.vue');
const UserAuth = () => import ('./pages/auth/UserAuth.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    { path: '/coaches/:id', component: CoachDetails },
    { path: '/coaches/:id/contact', component: ContactCoach },
    { path: '/register', component: CoachRegistration, meta: { requiresAuth: true } },
    { path: '/requests', component: RequestsList, meta: { requiresAuth: true } },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
