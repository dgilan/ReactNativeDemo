import React, { createClass, Image, View, TouchableHighlight, Text, StyleSheet, TextInput } from 'react-native'
import extend from '../../src/utils/extend'
import BaseComponent from './common/count-example'
import Heading from '../../src/components/heading'
import assign from 'lodash.assign'

const image = require('../images/react-logo.png')

export default createClass(extend(BaseComponent, {

    getInitialState(){
        return {
            error: false
        }
    },

    onCountChange(value){
        if (Number(value) == value || value === '') {
            this.setState({text: value, error: false})
        } else {
            this.setState({text: value, error: true})
        }
    },

    render(){
        const styles = StyleSheet.create(assign({},
            this.context.styles.slides.common,
            this.context.styles.slides.countExample
        ))
        console.log(this.state)

        const inputStyles = [styles.input]
        if (this.state.error){
            inputStyles.push(styles.error)
        }

        return (
            <View style={styles.content}>

                <Heading size={1} style={styles.header}>Count: <Text>{this.state.count}</Text></Heading>
                <Image source={image} style={{width: 200, height: 200}}/>


                <TouchableHighlight style={styles.button} onPress={this.onClick}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.label}>Add +</Text>

                        <TextInput
                            style={inputStyles}
                            onChangeText={this.onCountChange}
                            keyboardType="numeric"
                            selectTextOnFocus={true}
                            placeholder="1"
                            value={this.state.text}>

                        </TextInput>
                    </View>
                </TouchableHighlight>
            </View>

        );
    }

}))
