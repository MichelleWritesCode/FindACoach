<template>
  <section class="ribbon">
    <p class="ribbonText"><slot></slot></p>
  </section>
</template>

<style scoped>
.ribbon {
  background-color: rgb(25, 32, 65, 0.1);
  border: none;
  padding: 5px 5px;
  font-size: 16px;
  width: 110px;
  clip-path: polygon(100% 0, 95% 50%, 100% 100%, 0% 100%, 0% 50%, 0% 0%);
}

.ribbonText {
  color: rgb(25, 32, 65, 0.75);
  font-weight: 600;
  font-size: 14px;
}

p.ribbonText {
  margin: 0;
}
</style>
