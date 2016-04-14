import React, { AppRegistry, Component, StyleSheet, Text, View, StatusBar } from 'react-native'

import { extend } from 'lodash'

import context from './src/utils/context'

import config from './presentation/config'

import Deck from './presentation/deck'

import TestFairy from 'react-native-testfairy'

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

TestFairy.begin('285189482195cad4f06a0aab2e870efbb9405398')
AppRegistry.registerComponent('Demo2', () => Demo);
