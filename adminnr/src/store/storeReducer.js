const types = {
    setLoadingOn: 'set-loading-on',
    setLoadingOff: 'set-loading-off'
}

const initialStore = {
    isLoading: {isLoading:false},
}

const storeReducer = (state, action) => {
    switch (action.type) {
        case types.setLoadingOn:
            return {
                ...state,
                isLoading: action.payload
            }
        case types.setLoadingOff:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}
export { initialStore, types };
export default storeReducer;