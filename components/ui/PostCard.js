import React from 'react';
import { TouchableOpacity } from "react-native";
import { Body, Card, CardItem, Text } from "native-base";
import { PostImage } from '../styled';

const PostCard = ({ post, onSelect }) => (
    <Card style={ { width: 250 } }>
        <TouchableOpacity onPress={ () => onSelect('PostDetails', { post }) }>
            <CardItem cardBody>
                <PostImage source={ { uri: post.image } }/>
            </CardItem>
            <CardItem header bordered>
                <Text>{ post.name }</Text>
            </CardItem>
            <CardItem bordered>
                <Body>
                <Text>{ post.subtitle }</Text>
                </Body>
            </CardItem>
        </TouchableOpacity>
    </Card>
);

export default PostCard;