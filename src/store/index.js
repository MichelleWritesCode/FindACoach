import { createStore } from 'vuex';

import coachesModule from './modules/module-coaches/coaches-index.js';
import requestsModule from './modules/module-requests/requests-index.js';

const store = createStore({
  modules: {
    allCoaches: coachesModule, //allCoaches is the namespace
    allRequests: requestsModule, //allRequests is the namespace
  },
  state() {
    //this is de rootState, because it is within the index.js instead of within the coaches-index.js or requests-index.js
    return {
      userId: 'c3', //this is the id of user Michelle
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
