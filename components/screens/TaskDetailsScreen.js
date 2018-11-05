import React from 'react';

import Tags from '../ui/Tags';
import withRouteParams from '../hoc/withRouteParams';
import ForceReload from "../ui/ForceReload";

import { ContentSpacing, TextWrapper, Title } from '../styled';

const TaskDetailsScreen = ({ task, onRefresh, isRefreshing }) => (
    <ForceReload
        onRefresh={ onRefresh }
        isRefreshing={ isRefreshing }
    >
        <ContentSpacing>
            <Title>{ task.name }</Title>
            <Tags style={ { flexDirection: 'row' } } tags={ task.tags }/>
            <TextWrapper>{ task.description }</TextWrapper>
        </ContentSpacing>
    </ForceReload>
);

export default withRouteParams(TaskDetailsScreen);