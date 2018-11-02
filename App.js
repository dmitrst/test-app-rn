import React from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import Notifications from './components/Notifications';
import Navigation from './components/Navigation';

import store from './store';

class App extends React.Component {
    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
        });
    }

    render() {
        return (
            <Provider store={ store }>
                <Root>
                    <Notifications/>
                    <Navigation/>
                </Root>
            </Provider>
        );
    }
}

export default App;