<template>
  <li>
    <slot name="coachName"></slot>
    <slot name="coachAreas"></slot>
    <slot name="coachDescription"></slot>
    <slot name="coachHourlyRate"></slot>
  </li>
</template>

<script>
// import { computed } from 'vue';
// import { useStore } from 'vuex';

export default {
  // setup() {
  //   const store = useStore();
  //   const filteredCoaches = computed(() => {
  //     return store.getters['allCoaches/coaches']; //allCoaches is the namespace of the module-coaches and coaches is the name of the getter (take a look a coaches-getters)
  //   });
  //   function areaStyling(input) {
  //     input = input.join(' | ');
  //     return input;
  //   }
  //   return { areaStyling, filteredCoaches };
  // },
};
</script>

<style scoped>
li {
  list-style: none;
  border-bottom: 1px solid goldenrod;
  padding-bottom: 6px;
}
</style>
