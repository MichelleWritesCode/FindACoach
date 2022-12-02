<template>
  <section class="container">
    <the-title>Register as a coach!</the-title>
    <base-card>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import TheTitle from '../../components/layout/TheTitle.vue';
import BaseCard from '../../components/ui/BaseCard.vue';
import CoachForm from '../../components/coaches/CoachForm.vue';

import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  components: { BaseCard, CoachForm, TheTitle },
  setup() {
    const store = useStore();
    const router = useRouter();

    function saveData(formData) {
      store.dispatch('allCoaches/registerCoach', formData);
      router.push('/coaches');
    }

    return { saveData };
  },
};
</script>
