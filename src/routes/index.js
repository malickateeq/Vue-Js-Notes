import { createRouter, createWebHistory } from "vue-router";



const router = createRouter({

    history: createWebHistory(),    // The browser's built-in support for history
    routes,

    
    // CSS class for active links
    linkActiveClass: "active link-expand"
});

export default router;