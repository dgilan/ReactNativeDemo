import React, { createClass, View, Text, Animated, PropTypes, StyleSheet, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import stepped from '../../src/utils/stepped'
import extend from '../../src/utils/extend'
import Lang from '../language/bullet-love-native-apps.en'
import BaseComponent from './common/builging-native-apps-is-hard'
import Heading from '../../src/components/heading'
import List from '../../src/components/list'

const maxStep = 5
const Component = createClass(extend(BaseComponent, {

    contextTypes: {
        styles: PropTypes.object
    },

    getInitialState(){
        return {
            opacity1: new Animated.Value(0),
            opacity2: new Animated.Value(0),
            opacity3: new Animated.Value(0)
        }
    },

    componentWillReceiveProps(props){
        if (props.step < this.props.step) {
            this._previousStepAnimation()
        } else if (props.step > this.props.step) {
            this._nextStepAnimation()
        }
    },

    _getStepOpacity(num){
        const step = this.props.step + 1
        if (step < num) {
            return 0
        }

        if (step === num || step === maxStep - 1) {
            return 1
        }

        return 0.3
    },

    _nextStepAnimation(){
        Animated.parallel([
            Animated.timing(this.state.opacity1, {
                toValue: this._getStepOpacity(1)
            }),
            Animated.timing(this.state.opacity2, {
                toValue: this._getStepOpacity(2)
            }),
            Animated.timing(this.state.opacity3, {
                toValue: this._getStepOpacity(3)
            })
        ]).start()
    },

    _previousStepAnimation(){
        Animated.parallel([
            Animated.timing(this.state.opacity1, {
                toValue: 0,
                duration: 0
            }),
            Animated.timing(this.state.opacity2, {
                toValue: 0,
                duration: 0
            }),
            Animated.timing(this.state.opacity3, {
                toValue: 0,
                duration: 0
            }),
        ]).start()
    },

    renderImage(){
        return this.props.step ?
            <Animated.Image style={{opacity: this.state.opacity1, height: 110, width: 110, alignSelf: 'center'}}
                            source={this.props.image}/> : null
    },

    renderList(){
        const style = StyleSheet.create({listItem: this.context.styles.components.listItem}).listItem
        return (
            <View>
                <List>
                    <Animated.Text style={[style, {opacity: this.state.opacity1}]}> - Разный стек технологий</Animated.Text>
                    {this.renderImage()}
                    <Animated.Text style={[style, {opacity: this.state.opacity2}]}> - Нет переиспользования кода</Animated.Text>
                    <Animated.Text style={[style, {opacity: this.state.opacity3}]}> - Билд на каждое изменение</Animated.Text>
                </List>
            </View>
        )
    },

    render() {
        const styles = this.context.styles
        const commonStyle = StyleSheet.create({content: styles.slides.common.content})
        const slideStyle = StyleSheet.create(styles.slides.bulletHardNativeApps)

        return (
            <View style={commonStyle.content}>
                <Heading size={3} style={slideStyle.header}>Почему это сложно?</Heading>
                <View>
                    {this.renderList()}
                </View>
            </View>
        )
    }
}))

export default stepped(React, maxStep)(Component)
