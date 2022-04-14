<template>
  <section class="inline">
    <li>
      <!-- <slot name="coachName"></slot>
    <slot name="coachAreas"></slot>
    <slot name="coachDescription"></slot>
    <slot name="coachHourlyRate"></slot> -->

      <h3>{{ fullName }}</h3>
      <p class="areas">{{ areaStyling(coachAreas) }}</p>
      <!-- <p>{{ coachDescription }}</p> -->
      <p class="hourlyRate">$ {{ coachHourlyRate }},- / hour</p>
    </li>
    <div class="actions">
      <ul>
        <li>
          <router-link :to="coachDetailsLink" class="link">details</router-link>
        </li>
        <li>
          <router-link :to="coachContactLink" class="link">contact</router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
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

    const fullName = computed(() => {
      return props.coachFirstName + ' ' + props.coachLastName;
    });

    const coachDetailsLink = computed(() => {
      return route.path + '/' + props.coachId;
    });

    const coachContactLink = computed(() => {
      return route.path + '/' + props.coachId + '/contact';
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
ul {
  text-align: right;
}

li {
  list-style: none;
  padding-bottom: 6px;
}

p.areas {
  margin-top: 6px;
  color: rgb(25, 32, 65);
}

a {
  text-decoration: none;
  color: goldenrod;
}

a:hover {
  /* background-color: goldenrod;
  color: white;
  padding: 5px 15px; */
  border-bottom: rgb(25, 32, 65) solid 1.5px;
}

a.link {
  font-size: 14px;
}

div.actions {
  margin-top: 30px;
}

.areas {
  font-style: italic;
  font-size: 14px;
}

.hourlyRate {
  color: rgb(25, 32, 65, 0.75);
  font-weight: 600;
  font-size: 14px;
}

.inline {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  border-bottom: 1px solid rgb(25, 32, 65, 0.1);
  margin-right: 20px;
}
</style>
