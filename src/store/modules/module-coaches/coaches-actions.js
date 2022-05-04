export default {
  registerCoach(context, payload) {
    //payload is the formData which comes from CoachForm.vue via CoachRegistration.vue
    const coachData = {
      //in CoachForm.vue the data names are first, last, desc, etc., but needs to be converted to the names in coaches-index.js which are firstName, lastName, description, etc.; that's what happened below
      id: 'c5',
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };

    context.commit('registerCoach', coachData); //commit = vastleggen vd data
  },
};
