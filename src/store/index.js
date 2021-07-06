import { createStore } from "vuex";

// Import store modules
import authModule from "./modules/auth/index.js";
import userModule from "./modules/user/index.js";
import adminModule from "./modules/admin/index.js";

const store = createStore({
    modules: {
        auth: authModule,
        user: userModule,
        admin: adminModule,
    },
    lastFetch: new Date().getTime(),
});

export default store;