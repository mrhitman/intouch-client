export default (state, action) => {

    switch (action.type) {
        case 'login':
            const data = action.payload.user;
            console.log(data);
            return {
                ...state,
                profile: {
                    ...state.profile,
                    name: `${data.profile.first_name} ${data.profile.last_name}`
                }
            };
        default:
            return state;
    }
}
