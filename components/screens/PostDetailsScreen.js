import React from 'react';

import ForceReload from '../ui/ForceReload';
import withRouteParams from '../hoc/withRouteParams';

import { ContentSpacing, TextWrapper, PostImage, Title } from '../styled';

const PostDetailsScreen = ({ post, onRefresh, isRefreshing }) => (
    <ForceReload
        onRefresh={ onRefresh }
        isRefreshing={ isRefreshing }
    >
        <ContentSpacing>
            <Title>{ post.name }</Title>
            <PostImage source={ { uri: post.image } }/>
            <TextWrapper>{ post.content }</TextWrapper>
        </ContentSpacing>
    </ForceReload>
);

export default withRouteParams(PostDetailsScreen);