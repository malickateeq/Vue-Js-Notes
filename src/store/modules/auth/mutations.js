export default 
{
    testMutation(state, payload)
    {
        state.test = payload.value;
    },
    setFetchTimestamp(state)
    {
        state.lastFetch = new Date().getTime();
    },
};