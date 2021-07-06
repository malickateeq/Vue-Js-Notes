export default 
{
    testAction(context, payload)
    {
        // 1. Async task
        // ...

        // 2. Commit Changes
        context.commit("test", payload.value);
    }
};