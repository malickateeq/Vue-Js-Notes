export default 
{
    testGetter(state, getters)
    {
        if(getters.test2 == 0)
            return state.test;
    },
    shouldFetch(state)
    {
        const lastFetch = state.lastFetch;
        if(!lastFetch)
            return true;
        
        const currentTimestamp = new Date().getTime();
        return (currentTimestamp - lastFetch ) / 1000 > (60 * 1);   // 1 Minute(s) Ago
    }
};