import React from 'react';
import { TouchableWithoutFeedback } from "react-native";
import { Card, CardItem, Text } from 'native-base';
import { truncate } from 'lodash';
import Tags from '../ui/Tags';

import styled from 'styled-components';

export const TaskCardWrapper = styled(Card)`
    width: 180;
    padding-top: 8;
    padding-left: 8;
    padding-right: 8;
    padding-bottom: 8; 
    border-radius: 10;
    margin-right: 10;
    margin-left: 10;
`;

export const TaskCardHeader = styled(CardItem)``;
export const TaskCardHeaderTitle = styled(Text)`
    font-weight: bold;
`;

export const TaskCardBody = styled(CardItem)`
    align-items: flex-start;
    padding-top: 0;
`;
export const TaskCardContent = styled(Text)`
    color: gray;
    font-size: 12;
    height: 60;
`;

export const TaskCardFooter = styled(CardItem)`
    margin-bottom: 0;
`;

const TaskCard = ({ task, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={ () => onSelect('TaskDetails', { task }) }>
            <TaskCardWrapper>
                <TaskCardHeader>
                    <TaskCardHeaderTitle>
                        { truncate(task.name, { length: 14, omission: '...' }) }
                    </TaskCardHeaderTitle>
                </TaskCardHeader>
                <TaskCardBody>
                    <TaskCardContent>
                        { truncate(task.subtitle, {
                            length: 65,
                            omission: '...'
                        }) }
                    </TaskCardContent>
                </TaskCardBody>
                <TaskCardFooter>
                    <Tags tags={ task.tags }/>
                </TaskCardFooter>
            </TaskCardWrapper>
        </TouchableWithoutFeedback>
    );
};

export default TaskCard;