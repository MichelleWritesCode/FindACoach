<template>
  <form @submit.prevent="sendMessage">
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
      <!-- the value of 'for' should be the same as the id of the input or textarea (it refers to eachother) -->
      <p class="errorMessage" v-if="!form.message.isValid">
        Please enter a message for the coach.
      </p>
      <!-- <p class="errorMessage" v-if="!form.formIsValid">
        Please fix the above errors and submit again.
      </p> -->
    </div>
    <div>
      <base-button class="contactButton">Send message</base-button>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue';
import BaseButton from '../components/ui/BaseButton.vue';

export default {
  components: { BaseButton },
  emit: ['save-request'],
  setup(props, context) {
    const form = ref({
      emailAddress: {
        val: '',
        isValid: true,
      },
      message: {
        val: '',
        isValid: true,
      },
      formIsValid: true,
    });

    function validateForm() {
      form.value.formIsValid = true;

      if (form.value.emailAddress.val === '') {
        form.value.emailAddress.isValid = false;
        form.value.formIsValid = false;
      }
      if (form.value.message.val === '') {
        form.value.message.isValid = false;
        console.log('test');
        form.value.formIsValid = false;
      }
    }

    function clearValidity(input) {
      form.value[input].isValid = true;
    }

    function sendMessage() {
      validateForm();

      if (!form.value.formIsValid) {
        console.log('form is not valid');
        return; //if the form is not valid, you don't want to execute the code below
      }

      const requestData = {
        email: form.value.emailAddress,
        message: form.value.message,
      };

      context.emit('save-request', requestData);
    }

    return { clearValidity, form, sendMessage };
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
