export default (state, action) => {

    switch (action.type) {
        case 'login':
            console.log(action.payload);
            return state;
        default:
            return state;
    }
}
