import { createStore } from 'vuex';

import coachesModule from './modules/module-coaches/coaches-index.js';
import requestsModule from './modules/module-requests/requests-index.js';

const store = createStore({
  modules: {
    allCoaches: coachesModule,
    allRequests: requestsModule,
  },
  state() {
    return {
      userId: 'c5',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
