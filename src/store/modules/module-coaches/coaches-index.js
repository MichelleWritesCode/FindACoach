import coachActions from './coaches-actions.js';
import coachGetters from './coaches-getters';
import coachMutations from './coaches-mutations';

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          areas: ['front-end', 'back-end', 'career'],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['front-end', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30,
        },
        {
          id: 'c3',
          firstName: 'Michelle',
          lastName: 'Ernst - van Wijk',
          areas: ['front-end', 'graphic design', 'communications'],
          description:
            "I am Michelle and I'm a junior developer in a little company. I build apps for social organisations.",
          hourlyRate: 110,
        },
        {
          id: 'c4',
          firstName: 'Ruben',
          lastName: 'Ernst',
          areas: ['back-end', 'frond-end', 'migration'],
          description:
            "I am Ruben and I'm a senior software developer and I work as a consultant at a bank.",
          hourlyRate: 90,
        },
      ],
    };
  },
  actions: coachActions,
  getters: coachGetters,
  mutations: coachMutations,
};