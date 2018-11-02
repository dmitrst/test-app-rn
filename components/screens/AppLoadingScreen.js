import React from 'react';
import { connect } from 'react-redux';

import { Spinner } from 'native-base';
import ForceReload from '../ui/ForceReload';
import { fetchUser } from '../../store/user/actions';
import { CenterContent } from '../styled';

class AppLoadingScreen extends React.Component {

    state = {
        isForceReload: false
    };

    // Fetch screen data
    fetchData() {
        this.props.fetchUser();
    }

    componentDidMount() {
        this.fetchData();
    }

    // Redirect after receiving user data
    componentWillReceiveProps(nextProps) {
        const { user, navigation } = nextProps;
        if ( !user.isFetching && user.id ) {
            navigation.navigate('AppDashboard');
        }
    }

    // Force reload
    onRefresh = () => {
        this.fetchData();
        this.setState({ isForceReload: true });
    };

    render() {
        return (
            <ForceReload
                onRefresh={ this.onRefresh }
                isRefreshing={ this.state.isForceReload && this.props.user.isFetching }
            >
                <CenterContent>
                    { this.props.isLoading && <Spinner/> }
                </CenterContent>
            </ForceReload>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

const mapActionsToProps = dispatch => ({
    fetchUser: () => dispatch(fetchUser())
});

export default connect(mapStateToProps, mapActionsToProps)(AppLoadingScreen);