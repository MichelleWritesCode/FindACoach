<template>
  <section class="container">
    <the-title>Coaches</the-title>
    <base-card>
      <section>
        <section><h2 class="filterHeading">Filter</h2></section>
      </section>
    </base-card>

    <base-card>
      <section>
        <section class="toolbar">
          <section class="controle">
            <base-button><template v-slot>refresh list</template></base-button>
            <base-button id="register"
              ><template v-slot
                ><router-link to="/register"
                  >register as a coach</router-link
                ></template
              ></base-button
            >
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
import BaseButton from '../../components/layout/BaseButton.vue';
import BaseCard from '../../components/layout/BaseCard.vue';
import TheTitle from '../../components/layout/TheTitle.vue';
import CoachItem from '../../components/CoachItem.vue';

import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  components: { BaseButton, BaseCard, TheTitle, CoachItem },
  setup() {
    const store = useStore();

    const hasCoaches = computed(() => {
      return store.getters['allCoaches/hasCoaches'];
    });

    const filteredCoaches = computed(() => {
      return store.getters['allCoaches/coaches']; //allCoaches is the namespace of the module-coaches and coaches is the name of the getter (take a look a coaches-getters)
    });

    return { filteredCoaches, hasCoaches };
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 30px;
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

.filterHeading {
  margin: 0;
}

.toolbar {
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
}

.toolbar h2,
.toolbar .controle {
  display: inline;
  flex-wrap: nowrap;
}

button#register {
  margin-left: 12px;
  margin-right: 6px;
}
</style>
