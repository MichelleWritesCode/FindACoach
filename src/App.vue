<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { computed, watch } from 'vue';

export default {
  components: { TheHeader },

  setup() {
    const router = useRouter();

    const store = useStore();
    store.dispatch('tryLogin');

    const didAutoLogout = computed(() => {
      return store.getters.didAutoLogout;
    })

    watch(didAutoLogout, (curValue, oldValue) => {
      if (curValue && curValue !== oldValue) {
        router.push('/coaches');
      }
    }) 
  }

};
</script>

<style>
@import './assets/styles/globalStyles.css';
</style>
