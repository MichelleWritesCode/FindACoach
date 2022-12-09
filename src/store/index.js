import { createStore } from 'vuex';

import coachesModule from './modules/module-coaches/coaches-index.js';
import requestsModule from './modules/module-requests/requests-index.js';
import authModule from './modules/module-auth/auth-index.js';

const store = createStore({
  modules: {
    allCoaches: coachesModule,
    allRequests: requestsModule,
    auth: authModule
  },
  
  getters: {},
});

export default store;
