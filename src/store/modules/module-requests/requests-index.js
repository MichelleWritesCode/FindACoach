import requestsActions from '../module-requests/requests-actions.js';
import requestsGetters from '../module-requests/requests-getters.js';
import requestsMutations from '../module-requests/requests-mutations.js';

export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  actions: requestsActions,
  getters: requestsGetters,
  mutations: requestsMutations,
};
