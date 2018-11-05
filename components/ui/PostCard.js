import React from 'react';
import { TouchableWithoutFeedback } from "react-native";
import { Card, CardItem, Text } from "native-base";

import styled from 'styled-components';
import { truncate } from "lodash";

export const PostCardWrapper = styled(Card)`
    width: 180;
    padding-bottom: 8;
    margin-right: 10;
    margin-left: 10;
    border-radius: 10;
    overflow: hidden;
`;

export const PostCardImage = styled.Image`
    flex: 1;
    height: 100;
`;

export const PostCardHeader = styled(CardItem)``;
export const PostCardHeaderTitle = styled(Text)`
    font-weight: bold;
`;

export const PostCardBody = styled(CardItem)`
    align-items: flex-start;
    padding-top: 0;
`;
export const PostCardContent = styled(Text)`
    color: gray;
    font-size: 12;
`;

const PostCard = ({ post, onSelect }) => (
    <TouchableWithoutFeedback onPress={ () => onSelect('PostDetails', { post }) }>
        <PostCardWrapper>
            <CardItem cardBody>
                <PostCardImage source={ { uri: post.image } }/>
            </CardItem>
            <PostCardHeader>
                <PostCardHeaderTitle>
                    { truncate(post.name, { length: 15, omission: '...' }) }
                </PostCardHeaderTitle>
            </PostCardHeader>
            <PostCardBody>
                <PostCardContent>
                    { truncate(post.subtitle, { length: 15, omission: '...' }) }
                </PostCardContent>
            </PostCardBody>
        </PostCardWrapper>
    </TouchableWithoutFeedback>
);

export default PostCard;