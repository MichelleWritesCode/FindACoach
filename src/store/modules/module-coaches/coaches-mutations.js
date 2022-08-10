export default {
  registerCoach(state, payload) {
    //payload is the formData which comes from CoachForm.vue via CoachRegistration.vue
    state.coaches.push(payload); //this is a push function, because you want to add a new registered coach into the coachlist in the store.
  },
  setCoaches(state, payload) {
    state.coaches = payload;
  },
};
