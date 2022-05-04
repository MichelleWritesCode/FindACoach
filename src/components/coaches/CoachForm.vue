<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label>Firstname</label>
      <input type="text" id="firstname" v-model.trim="form.firstName" />
    </div>
    <div class="form-control">
      <label>Lastname</label>
      <input type="text" id="lastname" v-model.trim="form.lastName" />
    </div>
    <div class="form-control">
      <label>Description</label>
      <textarea
        type="text"
        id="description"
        rows="5"
        v-model.trim="form.description"
      />
    </div>
    <div class="form-control">
      <label>Hourly rate</label>
      <input type="number" id="rate" v-model.number="form.rate" />
    </div>
    <div class="form-control">
      <h4>Areas of expertise</h4>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="form.areas"
        />
        <label for="frontend">frontend development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="form.areas"
        />
        <label for="backend">backend development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="form.areas"
        />
        <label for="career">career advisory</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="graphics"
          value="ux ui"
          v-model="form.areas"
        />
        <label for="graphics">ux/ui design</label>
      </div>
    </div>
    <base-button class="registerButton">register</base-button>
  </form>
</template>

<script>
import BaseButton from '../../components/ui/BaseButton.vue';

import { ref } from 'vue';

export default {
  components: { BaseButton },
  emit: ['save-data'],
  setup(props, context) {
    const form = ref({
      firstName: '',
      lastName: '',
      rate: null,
      description: '',
      areas: [],
    });

    function submitForm() {
      const formData = {
        first: form.value.firstName,
        last: form.value.lastName,
        desc: form.value.description,
        rate: form.value.rate,
        areas: form.value.areas,
      };

      context.emit('save-data', formData);
    }

    return {
      form,
      submitForm,
    };
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-top: 1rem;
  margin-bottom: 0.2rem;
  color: rgb(25, 32, 65, 0.6);
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: rgb(25, 32, 65, 0.05);
  outline: none;
  border-color: rgb(25, 32, 65);
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: rgb(25, 32, 65) solid 1px;
}

.registerButton {
  margin-top: 50px;
}
</style>
