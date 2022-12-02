export default {
  coaches(state) {
    return state.coaches;
  },
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some((coach) => coach.id === userId);
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
};
