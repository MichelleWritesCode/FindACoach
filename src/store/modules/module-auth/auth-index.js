import mutations from './auth-mutations.js';
import actions from './auth-actions.js';
import getters from './auth-getters.js';

export default {
  state() {
    return {
      userId: null,
      token: null,
      didAutoLogout: false,
    };
  },

  mutations,
  actions,
  getters
}