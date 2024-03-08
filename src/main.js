import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/index';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faEraser, faSignOutAlt, faCheck, faSpinner, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faEdit, faEraser, faSignOutAlt, faCheck, faSpinner, faExclamation);

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
