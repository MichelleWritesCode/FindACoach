<template>
  <button>
    <router-link :to="linkToPage" class="link"><slot></slot></router-link>
  </button>
</template>

<script>
export default {
  props: ['linkToPage'],
};
</script>

<style scoped>
button {
  background-color: white;
  color: white;
  border: solid 1px goldenrod;
  padding: 5px 15px;
}

a {
  text-decoration: none;
  color: goldenrod;
}

.link {
  width: 70px;
}

a.link {
  font-size: 14px;
}
</style>
