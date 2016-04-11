import React, { createClass, Image, View, TouchableHighlight, Text, StyleSheet } from 'react-native'
import extend from '../../src/utils/extend'
import BaseComponent from './common/count-example'
import Heading from '../../src/components/heading'
import assign from 'lodash.assign'

const image = require('../images/react-logo.png')

export default createClass(extend(BaseComponent, {
    render(){
        const styles = StyleSheet.create(assign({},
            this.context.styles.slides.common,
            this.context.styles.slides.countExample
        ))

        return (
            <View style={styles.content}>

                <Heading size={1} style={styles.header}>Count: <Text>{this.state.count}</Text></Heading>
                <Image source={image} style={{width: 200, height: 200}}/>
                <TouchableHighlight style={styles.button} onPress={this.onClick}>
                    <Text style={styles.label}>Add +1</Text>
                </TouchableHighlight>
            </View>

        );
    }

}))
