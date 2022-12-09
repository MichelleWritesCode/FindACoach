<template>
  <header>
    <h1><router-link to="/">Find a coach</router-link></h1>
    <nav>
      <router-link class="menuItem" to="/coaches">all coaches</router-link>
      <router-link v-if="isLoggedIn" class="menuItem" to="/requests">requests</router-link>
      <router-link v-else class="menuItem" to="/auth">login</router-link>
      <base-button v-if="isLoggedIn" @click="logout" class="menuItem outline">Logout</base-button>
    </nav>
  </header>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import BaseButton from '../ui/BaseButton.vue';

export default {
  components: { BaseButton },
  setup() { 
    const store = useStore();
    const router = useRouter();

    const isLoggedIn = computed(() => {
      return store.getters.isAuthenticated;
    })

    function logout() {
      store.dispatch('logout');
      router.push('/coaches');
    }

    return {
      isLoggedIn,
      logout
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}

a.router-link-active.router-link-exact-active.menuItem,
a:active,
a:hover {
  border-bottom: 3px solid white;
}

header {
  background-color: rgb(25, 32, 65);
}

header .menuItem {
  padding: 5px 15px;
  vertical-align: middle;
  color: white;
  background-color: goldenrod;
  text-transform: uppercase;
  text-decoration: none;
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 1px;
}

header .outline {
  background-color: rgb(25, 32, 65);
  color: goldenrod;
  border: 1px solid goldenrod;
  margin-left: 15px;
}

@media only screen and (max-width: 498px) {
  header,
  nav,
  header .menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
  }

  header .menuItem {
    display: flex;
    flex-wrap: wrap;
    margin: 0 10px 10px;
  }

  header .outline {
    background-color: rgb(25, 32, 65);
    color: goldenrod;
    border: 1px solid goldenrod;
    margin-left: 15px;
  }
}

@media only screen and (min-width: 498px) {
  header {
    display: flex;
    flex-wrap: wrap;
    height: 120px;
    justify-content: center;
    padding: 0 100px;
  }

  h1 {
    margin-bottom: 0;
  }

  header .menuItem {
    justify-content: center;
    margin: 10px;
  }

  header .outline {
    background-color: rgb(25, 32, 65);
    color: goldenrod;
    border: 1px solid goldenrod;
    margin-left: 15px;
  }
}

@media only screen and (min-width: 768px) {
  header {
    display: flex;
    height: 85px;
    flex-wrap: nowrap;
    text-align: right;
    justify-content: space-between;
    padding: 10px 60px;
    padding-left: 100px;
  }

  header .menuItem {
    display: inline;
    justify-content: center;
    margin: 10px;
  }

  header .outline {
    background-color: rgb(25, 32, 65);
    color: goldenrod;
    border: 1px solid goldenrod;
    margin-left: 15px;
  }

  nav {
    margin-top: 20px;
  }
}
</style>
