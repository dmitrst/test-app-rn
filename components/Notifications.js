import React from 'react';
import { connect } from 'react-redux';

import { Toast } from 'native-base';

class Notifications extends React.Component {

    componentWillReceiveProps(props) {
        if ( props.network.status === 'offline' ) {
            Toast.show({
                text: props.network.message,
                position: 'top'
            });
        }
    }

    render() {
        return null;
    }
}

const mapStateToProps = state => ({
    network: state.network
});

export default connect(mapStateToProps)(Notifications);