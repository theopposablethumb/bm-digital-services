export default (state = null, action) => {
    switch (action.type) {
        case 'FETCH_META': return action.payload;
        default: return state;
    }
};