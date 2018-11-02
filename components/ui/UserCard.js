import React from 'react';
import { Avatar, WelcomeMessage, CenterContent } from '../styled';

const UserCard = ({ first_name, avatar }) => (
    <CenterContent>
        <Avatar
            // There should be used this avatar variable, however image by link from task
            // isn't available, so I applied third party image to emulate avatar rendering
            // source={ { uri: avatar } }
            source={ { uri: 'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg' } }/>
        <WelcomeMessage>Hi { first_name }</WelcomeMessage>
    </CenterContent>
);

export default UserCard;