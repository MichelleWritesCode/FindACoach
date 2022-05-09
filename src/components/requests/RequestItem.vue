<template>
  <li class="requestItem">
    <h3></h3>
    <div>
      <a :href="emailLink">{{ email }} </a>
    </div>
    <p class="message">{{ message }}</p>
  </li>
</template>

<script>
import { computed } from 'vue';
export default {
  props: ['email', 'message'],
  setup(props) {
    const emailLink = computed(() => {
      return 'mailto:' + props.email;
    });

    return {
      emailLink,
    };
  },
};
</script>

<style scoped>
li {
  list-style: none;
  padding-bottom: 20px;
}

a {
  text-decoration: none;
  color: goldenrod;
}

a:hover {
  border-bottom: rgb(25, 32, 65) solid 3px;
}

.message {
  margin-top: 35px;
  margin-bottom: 25px;
  color: rgb(25, 32, 65);
  font-size: 15px;
  line-height: 1.8;
}

.requestItem {
  border-bottom: 1px solid rgb(25, 32, 65, 0.1);
}
</style>
