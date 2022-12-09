<template>
  <section class="container">
    <base-dialog :showDialog="!!error" title="An error occurred!" @close="closeDialog"><p>{{ error }}</p></base-dialog>
    <base-dialog :showDialog="isLoading" title="Authenticating..."></base-dialog>
    <the-title>Authentication</the-title>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <div class="button-group">
          <p v-if="!formIsValid" class="errorMessage">Please enter a valid email and password (must be at least 6 characters long).</p>
          <base-button>{{ submitButtonCaption }}</base-button>
          <base-button class="outline" type="button" mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption }}</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
import BaseButton from '../../components/ui/BaseButton.vue';
import BaseCard from '../../components/ui/BaseCard.vue';
import BaseDialog from '../../components/ui/BaseDialog.vue';
import TheTitle from '../../components/layout/TheTitle.vue';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

export default {
  components: { BaseButton, BaseCard, BaseDialog, TheTitle },
  setup() {
    const email = ref('');
    const password = ref('');
    const formIsValid = ref(true);
    const mode = ref('login');
    const isLoading = ref(false);
    const error = ref(null);

    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    async function submitForm() { 
      formIsValid.value = true;
      if (email.value === '' || !email.value.includes('@') || password.value.length < 6) {
        formIsValid.value = false;
        return;
      } 

      isLoading.value = true;

      const actionPayload = {
            email: email.value,
            password: password.value,
          }

      try {
        if (mode.value === 'login') {
          await store.dispatch('login', actionPayload);
        } else {
         await store.dispatch('signup', actionPayload);
        }
        const redirectUrl = '/' + (route.query.redirect || 'coaches');
        router.push(redirectUrl);
      } catch(err) {
        error.value = err.message || 'Failed to authenticate, try later.';
      }

      isLoading.value = false;
    }

    function closeDialog() {
      error.value = null;
    }

    const submitButtonCaption = computed(() => {
      return mode.value === 'login' ? 'Login' : 'Signup';
    })

    const switchModeButtonCaption = computed(() => {
      return mode.value === 'login' ? 'Signup instead' : 'Login instead';
    })

    function switchAuthMode() {
      mode.value = mode.value === 'login' ? 'signup' : 'login';
    }

    return {
      email,
      error,
      formIsValid,
      closeDialog,
      isLoading,
      mode,
      password,
      submitButtonCaption,
      submitForm,
      switchAuthMode,
      switchModeButtonCaption
    }

  }
}
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

.button-group {
  margin-top: 50px;
}

.outline {
  background-color: white;
  color:goldenrod;
  border:  1px solid goldenrod;
  margin-left: 15px; 

}
</style>