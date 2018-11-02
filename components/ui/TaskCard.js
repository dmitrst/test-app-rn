import React from 'react';
import { TouchableOpacity } from "react-native";
import { Card, CardItem, Text } from "native-base";
import Tags from '../ui/Tags';

const TaskCard = ({ task, onSelect }) => {
    return (
        <Card style={ {
            width: 250
        } }>
            <TouchableOpacity onPress={ () => onSelect('TaskDetails', { task }) }>
                <CardItem header bordered>
                    <Text>{ task.name }</Text>
                </CardItem>
                <CardItem bordered>
                    <Text>{ task.subtitle }</Text>
                </CardItem>
            </TouchableOpacity>
            <CardItem footer bordered>
                <Tags tags={ task.tags }/>
            </CardItem>
        </Card>
    );
};

export default TaskCard;