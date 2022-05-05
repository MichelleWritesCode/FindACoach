<template>
  <section class="container">
    <the-title>Coach details</the-title>
    <base-card>
      <section class="inline">
        <div>
          <h3>{{ fullName }}</h3>
          <p class="areas">{{ areaStyling(selectedCoach.areas) }}</p>
          <base-ribbon class="hourlyRate"
            >$ {{ selectedCoach.hourlyRate }},- / hour</base-ribbon
          >
        </div>
        <div class="actions">
          <ul>
            <base-button>
              <li>
                <router-link :to="coachContactLink" class="link"
                  >contact coach</router-link
                >
              </li>
            </base-button>
          </ul>
        </div>
      </section>
      <div>
        <p>{{ description }}</p>
      </div>
    </base-card>
    <router-view></router-view>
  </section>
</template>

<script>
import BaseCard from '../../components/ui/BaseCard.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
import TheTitle from '../../components/layout/TheTitle.vue';
import BaseRibbon from '../../components/ui/BaseRibbon.vue';

import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

export default {
  components: { TheTitle, BaseCard, BaseButton, BaseRibbon },
  setup() {
    const route = useRoute();
    let coachId = route.params.id;
    const coachContactLink = computed(() => {
      return route.path + '/contact';
    });

    const store = useStore();
    let selectedCoach = store.getters['allCoaches/coaches'].find(
      (coach) => coach.id === coachId
    );

    const description = computed(() => {
      return selectedCoach.description;
    });

    const fullName = computed(() => {
      return selectedCoach.firstName + ' ' + selectedCoach.lastName;
    });

    function areaStyling(input) {
      input = input.join(' | ');
      return input;
    }

    return {
      areaStyling,
      coachContactLink,
      coachId,
      description,
      fullName,
      selectedCoach,
    };
  },
};
</script>

<style scoped>
ul {
  text-align: right;
  margin-top: 60px;
  padding-left: 10px;
}

li {
  list-style: none;
  padding-bottom: 2px;
}

p {
  margin-top: 35px;
  margin-bottom: 25px;
  color: rgb(25, 32, 65);
  font-size: 15px;
  line-height: 1.8;
}

.areas {
  font-style: italic;
  font-size: 15px;
}

p.areas {
  margin: 6px 0 25px 0;
  color: #219ebc;
}

.hourlyRate {
  color: rgb(25, 32, 65, 0.75);
  font-weight: 600;
  font-size: 14px;
}

p.hourlyRate {
  margin: 0;
}

div.actions {
  margin-top: 50px;
}

.inline {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-right: 5px;
}

.link {
  width: 70px;
  border: solid 1px goldenrod;
}
</style>
