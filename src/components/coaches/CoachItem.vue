<template>
  <section class="inline hr">
    <li>
      <h3>{{ fullName }}</h3>
      <p class="areas">{{ areaStyling(coachAreas) }}</p>
      <base-ribbon>€ {{ coachHourlyRate }},- / hour</base-ribbon>
    </li>
    <div class="actions">
      <ul class="inline-actions">
        <li class="button">
          <base-button-outline :linkToPage="coachDetailsLink">
            view details
          </base-button-outline>
        </li>
        <li class="button">
          <base-button-outline :linkToPage="coachContactLink">
            contact coach
          </base-button-outline>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import BaseButtonOutline from '../ui/BaseButtonOutline.vue';
import BaseRibbon from '../ui/BaseRibbon.vue';

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
@media only screen and (max-width: 498px) {
  button {
    width: 80px;
  }

  .inline-actions {
    margin-top: 55px;
  }
}

@media only screen and (min-width: 498px) {
  .inline-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    max-width: 200px;
    margin-right: 5px;
    margin-top: 60px;
  }

  button {
    width: 120px;
  }
}

@media only screen and (min-width: 768px) {
  div.actions {
    margin-top: 55px;
  }
  .inline-actions {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    max-width: 400px;
    margin-right: 5px;
  }
}

.inline {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-right: 5px;
}

.hr {
  border-bottom: 1px solid rgb(25, 32, 65, 0.1);
}

ul {
  text-align: right;
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
  color: #219ebc;
}

.button {
  margin-left: 15px;
  margin-top: 0px;
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
