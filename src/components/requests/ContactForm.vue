<template>
  <form @submit.prevent="sendMessage">
      <p v-if="!formIsValid" class="errorMessage" >
        Please fix the error(s) below and submit again.
      </p>
    <div class="form-controle" :class="{ invalid: !form.emailAddress.isValid }">
      <label for="email">Please enter your email here</label>
      <input
        type="email"
        id="email"
        v-model.trim="form.emailAddress.val"
        @blur="clearValidity('emailAddress')"
      />
      <p class="errorMessage" v-if="!form.emailAddress.isValid">
        Please enter a valid email address.
      </p>
    </div>
    <div class="form-controle" :class="{ invalid: !form.message.isValid }">
      <label for="message">Write your message to the coach</label>
      <textarea
        rows="5"
        id="message"
        v-model.trim="form.message.val"
        @blur="clearValidity('message')"
      />
      <p class="errorMessage" v-if="!form.message.isValid">
        Please enter a message for the coach.
      </p>
      
    </div>
    <div>
      <base-button class="contactButton">Send message</base-button>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue';
import BaseButton from '../ui/BaseButton.vue';

export default {
  components: { BaseButton },
  emit: ['save-request'],
  setup(props, context) {
    const formIsValid = ref(true);
    const form = ref({
      emailAddress: {
        val: '',
        isValid: true,
      },
      message: {
        val: '',
        isValid: true,
      },
    });

    function validateTotalForm() {
      const notValid = Object.values(form.value).some(
        (value) => !value.isValid
      );
      return notValid ? (formIsValid.value = false) : (formIsValid.value = true);
    }

    function validateForm() {
      const keysArray = Object.keys(form.value);
      keysArray.forEach((key) =>
        !form.value[key].val || form.value[key].val.length === 0
          ? (form.value[key].isValid = false)
          : (form.value[key].isValid = true)
      );

      validateTotalForm();
    }

    function clearValidity(input) {
      form.value[input].isValid = true;
    }

    function sendMessage() {
      validateForm();

      if (!formIsValid.value) {
        console.log('form is not valid');
        return; 
      }

      const requestData = {
        email: form.value.emailAddress.val,
        message: form.value.message.val,
      };

      context.emit('save-request', requestData);
    }

    return { clearValidity, form, formIsValid, sendMessage, validateTotalForm };
  },
};
</script>

<style scoped>
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

.contactButton {
  margin-top: 50px;
}

.form-control {
  margin: 0.5rem 0;
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
