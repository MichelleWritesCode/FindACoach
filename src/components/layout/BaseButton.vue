<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  background-color: goldenrod;
  color: white;
  border: none;
  padding: 5px 15px;
}

button:hover {
  border-bottom: 3px solid rgb(25, 32, 65);
}
</style>
