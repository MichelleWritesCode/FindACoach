<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !form.firstName.isValid }">
      <label>Firstname</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="form.firstName.val"
        @blur="clearValidity('firstName')"
      />
      <p class="errorMessage" v-if="!form.firstName.isValid">
        Firstname must not be empty.
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !form.lastName.isValid }">
      <label>Lastname</label>
      <input
        type="text"
        id="lastname"
        v-model.trim="form.lastName.val"
        @blur="clearValidity('lastName')"
      />
      <p class="errorMessage" v-if="!form.lastName.isValid">
        Lastname must not be empty.
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !form.description.isValid }">
      <label>Description</label>
      <textarea
        type="text"
        id="description"
        rows="5"
        v-model.trim="form.description.val"
        @blur="clearValidity('description')"
      />
      <p class="errorMessage" v-if="!form.description.isValid">
        The description must not be empty.
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !form.rate.isValid }">
      <label>Hourly rate</label>
      <input
        type="number"
        id="rate"
        v-model.number="form.rate.val"
        @blur="clearValidity('rate')"
      />
      <p class="errorMessage" v-if="!form.rate.isValid">
        Rate must be greater than 0.
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !form.areas.isValid }">
      <h4>Areas of expertise</h4>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="form.areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="frontend">frontend development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="form.areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="backend">backend development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="form.areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="career">career advisory</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="graphics"
          value="ux ui"
          v-model="form.areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="graphics">ux/ui design</label>
      </div>
      <p class="errorMessage" v-if="!form.areas.isValid">
        At least one expertise must be selected.
      </p>
    </div>
    <p v-if="!form.formIsValid" class="errorMessage">
      Please fix the above errors and submit again.
    </p>
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
      firstName: {
        val: '',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
      formIsValid: true,
    });

    function validateForm() {
      form.value.formIsValid = true;

      if (form.value.firstName.val === '') {
        form.value.firstName.isValid = false;
        form.value.formIsValid = false;
      }
      if (form.value.lastName.val === '') {
        form.value.lastName.isValid = false;
        form.value.formIsValid = false;
      }
      if (form.value.description.val === '') {
        form.value.description.isValid = false;
        form.value.formIsValid = false;
      }
      if (!form.value.rate.val || form.value.rate.val < 0) {
        form.value.rate.isValid = false;
        form.value.formIsValid = false;
      }
      if (form.value.areas.val.length === 0) {
        form.value.areas.isValid = false;
        form.value.formIsValid = false;
      }
    }

    function clearValidity(input) {
      form.value[input].isValid = true;
    }

    function submitForm() {
      validateForm();

      if (!form.value.formIsValid) {
        console.log('form is not valid');
        return; //if the form is not valid, you don't want to execute the code below
      }

      const formData = {
        first: form.value.firstName.val,
        last: form.value.lastName.val,
        desc: form.value.description.val,
        rate: form.value.rate.val,
        areas: form.value.areas.val,
      };

      context.emit('save-data', formData);
    }

    return {
      clearValidity,
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

a {
  text-decoration: none;
  color: goldenrod;
}

a:hover {
  border-bottom: rgb(25, 32, 65) solid 3px;
}

a.link {
  font-size: 14px;
  padding: 5px 10px;
}

.link {
  width: 70px;
  border: solid 1px goldenrod;
}

.errorMessage {
  color: red;
  font-size: 12px;
  margin-top: 10px;
  font-style: italic;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
