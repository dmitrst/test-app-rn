import React from 'react';
import { ContentSpacing, brandedPurpleColor } from '../styled';
import styled from 'styled-components';

export const UserCardWrapper = styled.View`
    padding-top: 30;
`;

export const WelcomeMessage = styled.Text`
    font-weight: bold;
    font-size: 26;
    color: ${brandedPurpleColor};
    padding-top: 10;
    padding-bottom: 10;
`;

export const Avatar = styled.Image`
    width: 100;
    height: 100;
    border-radius: 50;
`;

const UserCard = ({ first_name, avatar }) => (
    <ContentSpacing>
        <UserCardWrapper>
            <Avatar
                // There should be used this avatar variable, however image by link from task
                // isn't available, so I applied third party image to emulate avatar rendering
                // source={ { uri: avatar } }
                source={ { uri: 'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg' } }/>
            <WelcomeMessage>Hi { first_name },</WelcomeMessage>
        </UserCardWrapper>
    </ContentSpacing>
);

export default UserCard;