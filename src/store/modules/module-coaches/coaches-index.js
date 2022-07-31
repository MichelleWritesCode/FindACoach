import coachActions from './coaches-actions.js';
import coachGetters from './coaches-getters';
import coachMutations from './coaches-mutations';

export default {
  namespaced: true,
  state() {
    return {
      coaches: [],
    };
  },
  actions: coachActions,
  getters: coachGetters,
  mutations: coachMutations,
};
