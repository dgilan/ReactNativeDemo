import React, { AppRegistry, Component, StyleSheet, Text, View } from 'react-native'

import { extend } from 'lodash'

import theme from './themes/example/index'

import Deck from './presentation/deck';

const styles = StyleSheet.create(theme)

class Demo extends Component {
    //render() {
    //    return (
    //        <View style={styles.container}>
    //            <Text style={styles.welcome}>
    //                Welcome to React Native! Uhu!
    //            </Text>
    //            <Text style={styles.instructions}>
    //                To get started, edit index.ios.js
    //            </Text>
    //            <Text style={styles.instructions}>
    //                Press Cmd+R to reload,{'\n'}
    //                Cmd+D or shake for dev menu
    //            </Text>
    //        </View>
    //    );
    //}
    render() {
        return (
            <Deck />
        );
    }
}


AppRegistry.registerComponent('Demo', () => Demo);
