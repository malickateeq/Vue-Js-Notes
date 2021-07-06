import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";

export default 
{
    // Important consideration
    namespace: true,

    state()
    {
        return {
            lastFetch: new Date().getTime(),
            test: null,
        }
    },
    getters: getters,
    mutations: mutations,
    actions: actions,
};