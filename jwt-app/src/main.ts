import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';
import App from './App.vue';
import router from './router';

// Import Quasar css
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/dist/quasar.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar, {
  plugins: {},
});
app.component('font-awesome-icon');

app.mount('#app');