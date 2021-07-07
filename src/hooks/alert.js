function useAlert() {

    setup(props, context) {
        // Same var can be used for v-model
        const name = ref("malik");
        
        function setName(event) {
            name.value = event.target.value;
        }

        return { setName, name };
    }
}

export default useAlert;