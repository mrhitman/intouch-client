export default (state, action) => {

    switch (action.type) {
        case 'load':
        case 'login':
            const profile = action.payload.user.profile;
            localStorage.setItem('login', JSON.stringify(action.payload));
            return {
                ...state,
                profile: {
                    ...state.profile,
                    name: profile.name,
                    quote: profile.quote,
                    status: 'Online',
                    info: {
                        ...state.profile.info,
                        birthday: profile.birthday,
                        town: profile.town,
                        company: profile.company,
                        languages: [profile.language],
                    }
                }
            };
        default:
            return state;
    }
}
