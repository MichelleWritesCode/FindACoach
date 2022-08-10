export default {
  async registerCoach(context, payload) {
    //payload is the formData which comes from CoachForm.vue via CoachRegistration.vue
    const userId = context.rootGetters.userId;
    const coachData = {
      //in CoachForm.vue the data names are first, last, desc, etc., but needs to be converted to the names in coaches-index.js which are firstName, lastName, description, etc.; that's what happened below
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };

    const response = await fetch(
      `https://findcoachdb-16a21-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
      {
        method: 'PUT', //PUT = overwrite data when it already exist or add/create if it doesn't exist, with POST you always add/create a new entry - in this case - a coach
        body: JSON.stringify(coachData),
      }
    );

    if (!response.ok) {
      //error...
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId, //naast het versturen van de coachData, stuur je ook een userId mee
    }); //commit = vastleggen vd data
  },

  async loadCoaches(context) {
    const response = await fetch(
      `https://findcoachdb-16a21-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
    );

    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(coach);

      context.commit('setCoaches', coaches); //setCoaches comes from the mutations file
    }
  },
};
