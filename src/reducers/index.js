export default (state, action) => {

    switch (action.type) {
        case 'login':
            const profile = action.payload.user.profile;
            console.log(profile);
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
