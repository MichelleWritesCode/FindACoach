export default {
  contactCoach(state, payload) {
    state.requests.push(payload);
  },

  setRequests(state, payload) {
    state.requests = payload;
  },
};
