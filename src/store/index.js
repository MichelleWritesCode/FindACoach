import { createStore } from 'vuex';

import coachesModule from './module-coaches/coaches-index.js';
import requestsModule from './module-requests/requests-index.js';

const store = createStore({
  modules: {
    allCoaches: coachesModule,
    allRequests: requestsModule,
  },
});

export default store;
