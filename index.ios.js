import React, { AppRegistry, Component, StyleSheet, Text, View, StatusBar } from 'react-native'

import { extend } from 'lodash'

import context from './src/utils/context'

import config from './presentation/config'

import Deck from './presentation/deck'

class Demo extends Component {
    componentWillMount() {
        StatusBar.setHidden(true)
    }

    componentWillUnmount() {
        StatusBar.setHidden(false)
    }

    render() {
        return (
            <Deck />
        );
    }
}

Demo = context(React, Demo, {styles: config.theme.default});

AppRegistry.registerComponent('Demo', () => Demo);
