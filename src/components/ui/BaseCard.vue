<template>
  <section class="card">
    <slot></slot>
  </section>
</template>

<style scoped>
.card {
  border-radius: 6px;
  background-color: white;
  box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.05);
  margin: 0 0 20px 0;
  padding: 20px;
}
</style>
