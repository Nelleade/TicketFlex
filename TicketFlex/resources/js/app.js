require('./bootstrap');


import { createApp } from 'vue';
import home from './home.vue';
createApp(home).mount('#home')

import Footer from './footer.vue';

export default {
  name: 'App',
  components: {
    Footer
  }}