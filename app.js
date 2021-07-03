Vue.createApp({
    // 1. A data function that returns an object.
    data() 
    {
        return {
            tasks: [],
            enteredTask: "",
        };
    },
    // 2. A Methods / Functions Object or Key-Value pair
    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
        }
    }
})
.mount("#app");