<template>
  <teleport to="body">
    <div v-if="showDialog" @click="closeDialog" class="backdrop"></div>
    <dialog open v-if="showDialog">
      <header>
        <slot name="header">
          <h2>{{ title }}</h2>
        </slot>
      </header>
      <section>
        <slot></slot>
      </section>
      <section>
        <slot name="actions">
          <base-button @click="closeDialog">Close</base-button>
        </slot>
      </section>
    </dialog>
  </teleport>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  components: { BaseButton },
  props: {
    showDialog: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
  },
  emits: ['close'],
  setup(props, { emit }) {
    function closeDialog() {
      emit('close');
    }

    return {
      closeDialog,
    };
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 6px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}

header {
  background-color: rgb(25, 32, 65);
  width: 100%;
  padding: 1rem;
}

header h2 {
  color: white;
  font-size: 24px;
  font-family: Cochin, Georgia, Times, 'Times New Roman', serif;
  text-transform: lowercase;
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 18rem);
    width: 35rem;
  }
}
</style>
