import { createApp } from 'vue'; // use {} because 'createApp' is from 'outside'
import App from './App.vue';

const app = createApp(App);

import router from './router.js';

app.use(router);
app.mount('#app');
