import React from 'react';

import ForceReload from '../ui/ForceReload';
import withRouteParams from '../hoc/withRouteParams';

import { ContentSpacing, SubTitle, TextWrapper, PostImage } from '../styled';

const PostDetailsScreen = ({ post, onRefresh, isRefreshing }) => (
    <ForceReload
        onRefresh={ onRefresh }
        isRefreshing={ isRefreshing }
    >
        <ContentSpacing>
            <SubTitle>{ post.subtitle }</SubTitle>
            <PostImage source={ { uri: post.image } }/>
            <TextWrapper>{ post.content }</TextWrapper>
        </ContentSpacing>
    </ForceReload>
);

export default withRouteParams(PostDetailsScreen);