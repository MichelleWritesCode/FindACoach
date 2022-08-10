<template>
  <section class="container">
    <the-title>Page not found!</the-title>
    <base-card>
      <p>Sorry, we couldn't found the page you were looking for.</p>
      <base-button class="button">
        <router-link to="/">Back to the homepage</router-link>
      </base-button>
    </base-card>
  </section>
</template>

<script>
import TheTitle from '../components/layout/TheTitle.vue';
import BaseCard from '../components/ui/BaseCard.vue';
import BaseButton from '../components/ui/BaseButton.vue';

export default {
  components: { TheTitle, BaseCard, BaseButton },
};
</script>

<style>
.button {
  margin-top: 50px;
}
</style>
