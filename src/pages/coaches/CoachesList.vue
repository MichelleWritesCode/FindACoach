<template>
  <the-title>Coaches</the-title>
  <base-card>
    <section class="toolbar">
      <section class="filter">FILTER</section>
      <section class="controle">
        <button>refresh</button>
        <button><router-link to="/register">register</router-link></button>
      </section>
    </section>
  </base-card>
  <base-card>
    <section>LIST OF COACHES</section>
  </base-card>
</template>

<script>
import BaseCard from '../../components/layout/BaseCard.vue';
import TheTitle from '../../components/layout/TheTitle.vue';

export default {
  components: { BaseCard, TheTitle },
};
</script>

<style scoped>
.toolbar .filter {
  margin-right: 540px;
}

.toolbar .filter,
.toolbar .controle {
  display: inline;
  flex-wrap: nowrap;
}

button {
  margin-right: 10px;
}
</style>
