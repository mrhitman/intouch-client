{
    account: {
        id: Number;
        token: String;
        refresh_token: String;
        new_messages: Number;
        new_followers: Number;
        news: [];
        chat: {
            socket: WebSocket;
            channels: [
                {
                    with: {
                        id: Number,
                        name: String,
                        photo: String,
                    },
                    messages: [
                        {
                            text: String,
                            viewed: Boolean,
                            created_at: Date,
                        }
                    ]
                }
            ];
        }
    };
    active_user: {
        id: Number;
        profile: {
            name: String;
            first_name: String;
            middle_name: String;
            last_name: String;
            quote: String;
            birtday: String;
            hometown: String;
            company: String;
            relationships: String;
            language: String;
            life_priorities: String;
            hobbies: String;
        };
        friends: [
            {
                id: Number,
                name: String,
                photo: String,
                online: Boolean,
            }
        ];
        followers: [];
        followings: [];
    };
}