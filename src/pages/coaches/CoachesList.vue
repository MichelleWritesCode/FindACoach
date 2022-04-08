<template>
  <the-title>Coaches</the-title>
  <base-card>
    <section class="toolbar">
      <section class="filter"><h2>Filter</h2></section>
      <section class="controle">
        <button>refresh</button>
        <button><router-link to="/register">register</router-link></button>
      </section>
    </section>
  </base-card>

  <base-card>
    <section>
      <h2>List of coaches</h2>
      <section>
        <ul>
          <li v-for="coach in filteredCoaches" :key="coach.id">
            {{ coach.firstName }}
            {{ coach.lastName }}
          </li>
        </ul>
      </section>
    </section>
  </base-card>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import BaseCard from '../../components/layout/BaseCard.vue';
import TheTitle from '../../components/layout/TheTitle.vue';

export default {
  components: { BaseCard, TheTitle },
  setup() {
    const store = useStore();
    const filteredCoaches = computed(() => {
      return store.getters['allCoaches/coaches']; //allCoaches is the namespace of the module-coaches and coaches is the name of the getter (take a look a coaches-getters)
    });

    return { filteredCoaches };
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 30px;
}

.toolbar .filter {
  margin-right: 540px;
}

.toolbar .filter,
.toolbar .filter h2,
.toolbar .controle {
  display: inline;
  flex-wrap: nowrap;
}

button {
  margin-right: 10px;
}
</style>
