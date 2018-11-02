import React from 'react';
import { View } from 'react-native';
import { Tag, TagText } from '../styled';

// Colors list
const colors = [ 'blue', 'red', 'grey', 'green', 'yellow' ];

const Tags = ({ tags }) => (
    <View style={ { flexDirection: 'row' } }>
        { tags.map((tag, index) => (
            <Tag key={ index } color={ colors[ index ] }>
                <TagText>{ tag }</TagText>
            </Tag>
        )) }
    </View>
);

export default Tags;