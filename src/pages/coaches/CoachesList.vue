<template>
  <the-title>Coaches</the-title>
  <base-card>
    <section class="toolbar">
      <section class="filter"><h2>Filter</h2></section>
      <section class="controle">
        <button>refresh</button>
        <button><router-link to="/register">register</router-link></button>
      </section>
    </section>
  </base-card>

  <base-card>
    <section>
      <h2>List of coaches</h2>
      <section>
        <ul>
          <coach-item v-for="coach in filteredCoaches" :key="coach.id">
            <template v-slot:coachName>
              <h3>{{ coach.firstName }} {{ coach.lastName }}</h3>
            </template>
            <template v-slot:coachAreas>
              <p class="areas">{{ areaStyling(coach.areas) }}</p>
            </template>
            <template v-slot:coachDescription>
              <p>{{ coach.description }}</p>
            </template>
            <template v-slot:coachHourlyRate>
              <p class="hourlyRate">Hourly rate: $ {{ coach.hourlyRate }},-</p>
            </template>
          </coach-item>
        </ul>
      </section>
    </section>
  </base-card>
</template>

<script>
import BaseCard from '../../components/layout/BaseCard.vue';
import TheTitle from '../../components/layout/TheTitle.vue';
import CoachItem from './CoachItem.vue';

import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  components: { BaseCard, TheTitle, CoachItem },
  setup() {
    const store = useStore();
    const filteredCoaches = computed(() => {
      return store.getters['allCoaches/coaches']; //allCoaches is the namespace of the module-coaches and coaches is the name of the getter (take a look a coaches-getters)
    });

    function areaStyling(input) {
      input = input.join(' | ');
      return input;
    }

    return { areaStyling, filteredCoaches };
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 30px;
}

ul {
  padding-left: 0;
}

.toolbar .filter {
  margin-right: 535px;
}

.toolbar .filter,
.toolbar .filter h2,
.toolbar .controle {
  display: inline;
  flex-wrap: nowrap;
}

button {
  margin-right: 10px;
}

p.areas {
  margin-top: 6px;
  color: rgb(25, 32, 65);
}

.areas {
  font-style: italic;
  font-size: 12px;
}

.hourlyRate {
  color: rgb(25, 32, 65, 0.6);
  font-style: italic;
  font-size: 12px;
}
</style>
