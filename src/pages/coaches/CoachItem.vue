<template>
  <li>
    <!-- <slot name="coachName"></slot>
    <slot name="coachAreas"></slot>
    <slot name="coachDescription"></slot>
    <slot name="coachHourlyRate"></slot> -->

    <h3>{{ coachFirstName }} {{ coachLastName }}</h3>
    <p class="areas">{{ areaStyling(coachAreas) }}</p>
    <p>{{ coachDescription }}</p>
    <p class="hourlyRate">Hourly rate: $ {{ coachHourlyRate }},-</p>
  </li>
</template>

<script>
export default {
  props: {
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
  setup() {
    function areaStyling(input) {
      input = input.join(' | ');
      return input;
    }

    return { areaStyling };
  },
};
</script>

<style scoped>
li {
  list-style: none;
  border-bottom: 1px solid goldenrod;
  padding-bottom: 6px;
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
