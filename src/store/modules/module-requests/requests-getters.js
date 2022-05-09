export default {
  requests(state, getters, rootState, rootGetters) {
    //getters and rootState can be replaced by _
    const coachId = rootGetters.userId;
    return state.requests.filter((request) => request.coachId === coachId);
  },
  hasRequests(_, getters) {
    //_ is a replacement of 'state'
    return getters.requests && getters.requests.length > 0;
  },
};
