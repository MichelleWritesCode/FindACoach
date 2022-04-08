import { createStore } from 'vuex';

import coachesModule from './modules/module-coaches/coaches-index.js';
import requestsModule from './modules/module-requests/requests-index.js';

const store = createStore({
  modules: {
    allCoaches: coachesModule, //allCoaches is the namespace
    allRequests: requestsModule, //allRequests is the namespace
  },
});

export default store;
