import requestsActions from '../module-requests/requests-actions.js';
import requestsGetters from '../module-requests/requests-getters.js';
import requestsMutations from '../module-requests/requests-mutations.js';

export default {
  namespaced: true,
  state() {
    return {
      requests: [
        {
          coachId: 'c3',
          userEmail: 'mernst@derealisatiegroep.nl',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          coachId: 'c1',
          userEmail: 'max@udemy.com',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
      ],
    };
  },
  actions: requestsActions,
  getters: requestsGetters,
  mutations: requestsMutations,
};
