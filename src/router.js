import { createWebHistory, createRouter } from 'vue-router'; // use {} because these dependencies are from 'outside' (extern)

import CoachesList from './pages/coaches/CoachesList.vue';
import CoachDetails from './pages/coaches/CoachDetails.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsList from './pages/requests/RequestsList.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      children: [
        {
          path: '/coaches/:id/contact',
          component: ContactCoach,
        },
      ],
    },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestsList },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
