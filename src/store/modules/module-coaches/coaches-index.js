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
            "I'm Maximilian and I've worked as a freelance web developer for years. As a self-taught professional I really know the hard parts and the difficult topics when learning new or improving on already-known languages. This background and experience enables me to focus on the most relevant key concepts and topics. My track record of many 5-star rated courses and more than 1,500,000 students on Udemy is the best proof for that. Let me help you become a developer as well!",
          hourlyRate: 130,
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'van Kaatsheuvel - van der Linden',
          areas: ['front-end', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company. Whether working as development instructor or teaching Business Administration I always received great feedback. The most rewarding experience is to see how people find new, better jobs, build awesome web applications, acquire amazing projects or simply enjoy their hobby with the help of my content. I can help you get your first job or progress in your current role.',
          hourlyRate: 130,
        },
        {
          id: 'c3',
          firstName: 'Michelle',
          lastName: 'Ernst - van Wijk',
          areas: ['front-end', 'graphic design', 'communications'],
          description:
            "I am Michelle and I'm a junior (frontend) developer in a little company. I build apps for social organisations. Two years ago I switched my career from project manager / communication advisor to a (web)developer. I started with frontend development, but maybe when I am more experienced I will grow further to a full stack developer.",
          hourlyRate: 105,
        },
        {
          id: 'c4',
          firstName: 'Ruben',
          lastName: 'Ernst',
          areas: ['back-end', 'frond-end', 'migration'],
          description:
            "I am Ruben and I'm a senior software developer. I started with programming when I was twelve years old. I've learned the most by doing; making my own websites and do research to find out how things work. I can mount my own pc and I have a big knowledge of wifi/network, computer stuff, backend, architecture, migration, frontend, etc. I really like it to deep dive into new things. My whole workcareer I work as a consultant and mostly at a bank.",
          hourlyRate: 105,
        },
      ],
    };
  },
  actions: coachActions,
  getters: coachGetters,
  mutations: coachMutations,
};
