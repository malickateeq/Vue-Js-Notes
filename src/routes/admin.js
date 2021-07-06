import NotFound from "../ui/NotFound.vue";

const routes = [
    {
        name: "not-found",
        path: "/:catchAll(.*)",
        component: NotFound
    }
];

export default routes;