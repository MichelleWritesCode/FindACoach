<template>
  <section class="container">
    <the-title>Requests received</the-title>
    <section>
      <base-card>
        <ul v-if="hasRequests">
          <request-item
            v-for="request in receivedRequests"
            :key="request.id"
            :email="request.userEmail"
            :message="request.message"
          ></request-item>
        </ul>
        <h4 v-else>You haven't received any requests yet.</h4>
      </base-card>
    </section>
  </section>
</template>

<script>
import BaseCard from '../../components/ui/BaseCard.vue';
import TheTitle from '../../components/layout/TheTitle.vue';
import RequestItem from '../../components/requests/RequestItem.vue';

import { computed } from 'vue';

import { useStore } from 'vuex';

export default {
  components: { BaseCard, RequestItem, TheTitle },
  setup() {
    const store = useStore();
    const hasRequests = computed(() => {
      return store.getters['allRequests/hasRequests'];
    });
    const receivedRequests = computed(() => {
      return store.getters['allRequests/requests'];
    });

    return {
      hasRequests,
      receivedRequests,
    };
  },
};
</script>

<style scoped>
ul {
  padding-left: 0;
  margin-top: 0;
}
</style>
