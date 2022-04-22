<template>
  <section class="container">
    <the-title>Coach details</the-title>
    <base-card>
      <h3>{{ fullName }}</h3>
      <p class="areas">{{ areaStyling(selectedCoach.areas) }}</p>
      <p class="hourlyRate">$ {{ selectedCoach.hourlyRate }},- / hour</p>
    </base-card>
    <router-view></router-view>
  </section>
</template>

<script>
import BaseCard from '../../components/layout/BaseCard.vue';
import TheTitle from '../../components/layout/TheTitle.vue';

import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

export default {
  components: { TheTitle, BaseCard },
  setup() {
    const route = useRoute();
    let coachId = route.params.id;

    const store = useStore();
    let selectedCoach = store.getters['allCoaches/coaches'].find(
      (coach) => coach.id === coachId
    );

    const fullName = computed(() => {
      return selectedCoach.firstName + ' ' + selectedCoach.lastName;
    });

    function areaStyling(input) {
      input = input.join(' | ');
      return input;
    }

    return { areaStyling, coachId, fullName, selectedCoach };
  },
};
</script>
