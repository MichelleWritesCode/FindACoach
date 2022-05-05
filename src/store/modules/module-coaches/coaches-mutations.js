export default {
  registerCoach(state, payload) {
    //payload is the formData which comes from CoachForm.vue via CoachRegistration.vue
    state.coaches.push(payload);
  },
};
