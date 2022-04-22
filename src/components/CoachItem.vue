<template>
  <section class="inline">
    <li>
      <h3>{{ fullName }}</h3>
      <p class="areas">{{ areaStyling(coachAreas) }}</p>
      <base-ribbon>
        <p class="hourlyRate">$ {{ coachHourlyRate }},- / hour</p>
      </base-ribbon>
    </li>
    <div class="actions">
      <ul>
        <base-button-outline>
          <li>
            <router-link :to="coachDetailsLink" class="link"
              >view details</router-link
            >
          </li>
        </base-button-outline>
        <base-button-outline>
          <li>
            <router-link :to="coachContactLink" class="link"
              >contact coach</router-link
            >
          </li>
        </base-button-outline>
      </ul>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import BaseButtonOutline from './layout/BaseButtonOutline.vue';
import BaseRibbon from './layout/BaseRibbon.vue';

export default {
  components: { BaseButtonOutline, BaseRibbon },
  props: {
    coachId: {
      type: String,
      required: true,
    },
    coachFirstName: {
      type: String,
      required: true,
    },
    coachLastName: {
      type: String,
      required: true,
    },
    coachDescription: {
      type: String,
      required: true,
    },
    coachHourlyRate: {
      type: Number,
      required: true,
    },
    coachAreas: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const route = useRoute();

    const coachDetailsLink = computed(() => {
      return route.path + '/' + props.coachId;
    });

    const coachContactLink = computed(() => {
      return route.path + '/' + props.coachId + '/contact';
    });

    const fullName = computed(() => {
      return props.coachFirstName + ' ' + props.coachLastName;
    });

    function areaStyling(input) {
      input = input.join(' | ');
      return input;
    }

    return { areaStyling, coachContactLink, coachDetailsLink, fullName };
  },
};
</script>

<style scoped>
.inline {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  border-bottom: 1px solid rgb(25, 32, 65, 0.1);
  margin-right: 5px;
}

ul {
  text-align: right;
  margin-top: 60px;
  padding-left: 10px;
}

li {
  list-style: none;
  padding-bottom: 20px;
}

.areas {
  font-style: italic;
  font-size: 15px;
}

p.areas {
  margin: 6px 0 25px 0;
  color: rgb(25, 32, 65);
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

a {
  text-decoration: none;
  color: goldenrod;
}

a:hover {
  border-bottom: rgb(25, 32, 65) solid 3px;
}

a.link {
  font-size: 14px;
  padding: 5px 10px;
}

.link {
  width: 70px;
  border: solid 1px goldenrod;
}
</style>
