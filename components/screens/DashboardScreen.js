import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text, Spinner } from 'native-base';

import ForceReload from '../ui/ForceReload';
import styled from 'styled-components';

import UserCard from '../ui/UserCard';
import TaskCard from '../ui/TaskCard';
import PostCard from '../ui/PostCard';

import { fetchTasks } from '../../store/tasks/actions';
import { fetchPosts } from '../../store/posts/actions';

import { ContentSpacing } from '../styled';

export const ScrollContentWrapper = styled.ScrollView`
  margin-left: 14;
  margin-top: 25;
  margin-bottom: 35;
`;

class DashboardScreen extends React.Component {

    state = {
        isForceReload: false
    };

    // Fetch screen data
    fetchData() {
        this.props.fetchTasks();
        this.props.fetchPosts();
    }

    componentDidMount() {
        this.fetchData();
    }

    // Open screen with task or post details
    openDetails = (screen, data) => {
        this.props.navigation.navigate(screen, {
            ...data,
            onRefresh: this.onRefresh,
            isRefreshing: this.props.tasks.isFetching && this.props.posts.isFetching
        });
    };

    // Force refresh handler
    onRefresh = () => {
        this.fetchData();
        this.setState({ isForceReload: true });
    };

    render() {
        const { user, tasks, posts } = this.props;
        return (
            <ForceReload
                onRefresh={ this.onRefresh }
                isRefreshing={ tasks.isFetching && posts.isFetching }
            >
                <UserCard { ...user }/>

                { tasks.isFetching && posts.isFetching && !this.state.isForceReload ? <Spinner/> :
                    <React.Fragment>
                        { tasks.items.length ?
                            <View>
                                <ContentSpacing>
                                    <Text>
                                        You have { tasks.items.length } requests to catch up on today.
                                    </Text>
                                </ContentSpacing>
                                <ScrollContentWrapper horizontal={ true }>
                                    { tasks.items.length && tasks.items.map(task => <TaskCard
                                        key={ task.id } task={ task }
                                        onSelect={ this.openDetails }/>)
                                    }
                                </ScrollContentWrapper>
                            </View> :
                            <ContentSpacing>
                                <Text>You have no available tasks.</Text>
                            </ContentSpacing>
                        }

                        { posts.items.length ?
                            <View>
                                <ContentSpacing>
                                    <Text>
                                        Here are some blog posts you may like to read.
                                    </Text>
                                </ContentSpacing>
                                <ScrollContentWrapper horizontal={ true }>
                                    { posts.items.map(post => <PostCard
                                        key={ post.id } post={ post }
                                        onSelect={ this.openDetails }/>) }
                                </ScrollContentWrapper>
                            </View> :
                            <View><Text>There are no posts.</Text></View>
                        }
                    </React.Fragment>
                }
            </ForceReload>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    tasks: state.tasks,
    posts: state.posts
});

const mapActionsToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchTasks: () => dispatch(fetchTasks())
});

export default connect(mapStateToProps, mapActionsToProps)(DashboardScreen);