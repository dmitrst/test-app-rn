import React from 'react';
import { tagColors } from '../styled';
import styled from "styled-components";

export const TagsWrapper = styled.View`
  flex-direction: row;
  padding-bottom: 0;
  margin-bottom: 0;
`;

export const Tag = styled.TouchableOpacity`
    background-color: ${ props => tagColors[ props.colorIndex ] || tagColors[ 0 ] };
    padding-top: 3;
    padding-bottom: 4;
    padding-left: 8;
    padding-right: 8;
    margin-right: 5;
    border-radius: 5;
`;

export const TagLabel = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 12;
`;

const Tags = ({ tags }) => (
    <TagsWrapper>
        { tags.map((tag, index) => (
            <Tag key={ index } colorIndex={ index }>
                <TagLabel>{ tag }</TagLabel>
            </Tag>
        )) }
    </TagsWrapper>
);

export default Tags;