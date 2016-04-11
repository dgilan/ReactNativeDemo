import React, { createClass, View, Image, Animated, PropTypes, StyleSheet, Dimensions } from 'react-native'
import stepped from '../../src/utils/stepped'
import extend from '../../src/utils/extend'
import Lang from '../language/builging-native-apps-is-hard.en'
import BaseComponent from './common/builging-native-apps-is-hard'
import Heading from '../../src/components/heading'

const Component = createClass(extend(BaseComponent, {
    contextTypes: {
        styles: PropTypes.object
    },

    getInitialState(){
        return {
            opacity: new Animated.Value(0),
            marginBottom: new Animated.Value(-100)
        }
    },

    componentWillReceiveProps(props){
        if (props.step < this.props.step) {
            this._previousStepAnimation()
        } else if (props.step > this.props.step) {
            this._nextStepAnimation()
        }
    },

    _nextStepAnimation(){
        Animated.parallel([
            Animated.timing(this.state.opacity, {
                toValue: 1
            }),
            Animated.timing(this.state.marginBottom, {
                toValue: 0
            })
        ]).start()
    },

    _previousStepAnimation(){
        Animated.parallel([
            Animated.timing(this.state.opacity, {
                toValue: 0,
                duration: 0
            }),
            Animated.timing(this.state.marginBottom, {
                toValue: -100,
                duration: 0
            })
        ]).start()
    },

    render() {
        const { opacity, marginBottom } = this.state
        const styles = StyleSheet.create(this.context.styles.slides.buildingNativeAppsIsHard)
        const common = StyleSheet.create(this.context.styles.slides.common)
        const animatedStyle = {opacity, marginBottom}

        return (
            <View style={common.content}>
                <Heading size={2} style={styles.header}>{Lang.HEADER}</Heading>
                <Animated.Text style={[animatedStyle, styles.description]}>
                    <Heading size={2} style={styles.description}>
                        {Lang.DESCRIPTION}
                    </Heading>
                </Animated.Text>
            </View>
        );
    }

}))

export default stepped(React, 2)(Component)
