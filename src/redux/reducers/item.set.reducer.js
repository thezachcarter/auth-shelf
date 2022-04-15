const setItem = (state = [], action) => {
    switch (action.type) {
        case 'SET_ITEM':
            return action.payload;
        default:
            return state;
    }
}

export default setItem;