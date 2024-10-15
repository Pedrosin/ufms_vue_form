import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa o router

const app = createApp(App);

app.use(router); // Usa o router

app.mount('#app'); // Monta o app
