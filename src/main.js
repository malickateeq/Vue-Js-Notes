import { createApp } from 'vue';

// Main App entry point
import App from './App.vue';

// App routes
import router from "./routes/index.js";

// App Store
import store from "./store/index.js";

const app = createApp(App).mount('#app');

app.use(router);
app.use(store);