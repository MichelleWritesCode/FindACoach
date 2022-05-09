<template>
  <section class="container">
    <the-title>Contact a coach</the-title>
    <base-card>
      <contact-form @save-request="saveRequest"></contact-form>
    </base-card>
  </section>
</template>

<script>
import TheTitle from '../../components/layout/TheTitle.vue';
import BaseCard from '../../components/ui/BaseCard.vue';
import ContactForm from '../../components/requests/ContactForm.vue';

import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

export default {
  components: { TheTitle, BaseCard, ContactForm },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    function saveRequest(requestData) {
      store.dispatch('allRequests/contactCoach', {
        email: requestData.email,
        message: requestData.message,
        coachId: route.params.id,
      }); //dispatch refers to actions --> contactCoach is the name of the function within the actions file that should be dispatched
      router.replace('/coaches');
    }

    return {
      saveRequest,
    };
  },
};
</script>
