export default {
  coaches(state) {
    return state.coaches; //use 'coaches', because in the coaches-index you will find in the 'state' an array named 'coaches'
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
};
