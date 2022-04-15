<template>
  <section class="ribbon">
    <slot></slot>
  </section>
</template>

<style scoped>
.ribbon {
  background-color: rgb(25, 32, 65, 0.1);
  color: white;
  border: none;
  padding: 5px 5px;
  font-size: 16px;
  width: 110px;
  clip-path: polygon(100% 0, 95% 50%, 100% 100%, 0% 100%, 0% 50%, 0% 0%);
}
</style>
