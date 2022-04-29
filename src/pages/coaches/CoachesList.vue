<template>
  <section class="container">
    <the-title>Coaches</the-title>
    <section class="registration">
      <base-button>
        <template v-slot>
          <router-link to="/register">register as a coach</router-link>
        </template>
      </base-button>
    </section>

    <filter-coach @change-filter="setFilters"></filter-coach>

    <base-card>
      <section>
        <section class="toolbar">
          <section class="controle">
            <base-button><template v-slot>refresh list</template></base-button>
          </section>
        </section>
        <hr />
        <section>
          <ul v-if="hasCoaches">
            <coach-item
              v-for="coach in filteredCoaches"
              :key="coach.id"
              :coachId="coach.id"
              :coachFirstName="coach.firstName"
              :coachLastName="coach.lastName"
              :coachDescription="coach.description"
              :coachHourlyRate="coach.hourlyRate"
              :coachAreas="coach.areas"
            >
            </coach-item>
          </ul>
          <h3 v-else>No coaches found</h3>
        </section>
      </section>
    </base-card>
  </section>
</template>

<script>
import BaseButton from '../../components/ui/BaseButton.vue';
import BaseCard from '../../components/ui/BaseCard.vue';
import TheTitle from '../../components/layout/TheTitle.vue';
import CoachItem from '../../components/coaches/CoachItem.vue';
import FilterCoach from '../../components/coaches/FilterCoach.vue';

import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  components: { BaseButton, BaseCard, TheTitle, CoachItem, FilterCoach },
  setup() {
    const store = useStore();

    const hasCoaches = computed(() => {
      return store.getters['allCoaches/hasCoaches'];
    });

    const activeFilters = ref({
      frontend: true,
      backend: true,
      career: true,
      graphics: true,
    });

    function setFilters(updatedFilters) {
      activeFilters.value = updatedFilters;
    }

    //in onderstaande functie gaat iets mis...
    const filteredCoaches = computed(() => {
      const allCoaches = store.getters['allCoaches/coaches'];
      return allCoaches.filter((coach) => {
        if (activeFilters.value.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (activeFilters.value.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (activeFilters.value.career && coach.areas.includes('career')) {
          return true;
        }
        if (activeFilters.value.graphics && coach.areas.includes('ux ui')) {
          return true;
        }
        return false;
      });
    });

    return {
      filteredCoaches,
      hasCoaches,
      setFilters,
    };
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 30px;
}

h2.filterHeading {
  margin-top: 5px;
}

hr {
  border: 0;
  border-top: 1px solid rgb(25, 32, 65, 0.1);
  margin: 0 5px 0 0;
}

ul {
  padding-left: 0;
  margin-top: 0;
}

.filter {
  width: 300px;
}

.filterHeading {
  margin: 0;
  margin-right: 25px;
}

.toolbar {
  display: flex;
  margin-bottom: 20px;
  justify-content: flex-start;
}

.toolbar h2,
.toolbar .controle {
  display: inline;
  flex-wrap: nowrap;
}

.registration {
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
}
</style>
