export default (state = null, action) => {
    switch (action.type) {
        case 'FETCH_PHOTOS': return action.payload;
        default: return state;
    }
};