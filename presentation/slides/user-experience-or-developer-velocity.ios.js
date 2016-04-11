import React, { createClass, View, StyleSheet, Image, Animated } from 'react-native'
import stepped from '../../src/utils/stepped'
import extend from '../../src/utils/extend'
import assign from 'lodash.assign'
import BaseComponent from './common/user-experience-or-developer-velocity'
import Heading from '../../src/components/heading'

const bluePill = require('../images/blue-pill.png')
const redPill = require('../images/red-pill.png')

const Component = createClass(extend(BaseComponent, {

    getInitialState(){
        return {
            opacity1: new Animated.Value(0),
            opacity2: new Animated.Value(0),
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
        return Number(step >= num)
    },

    _nextStepAnimation(){
        Animated.parallel([
            Animated.timing(this.state.opacity1, {
                toValue: this._getStepOpacity(1)
            }),
            Animated.timing(this.state.opacity2, {
                toValue: this._getStepOpacity(2)
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
            })
        ]).start()
    },

    render() {
        const styles = StyleSheet.create(assign({},
            this.context.styles.slides.common,
            this.context.styles.slides.userExperienceOrDeveloperVelocity,
            {center: this.context.styles.center}
        ))

        return (
            <View style={[styles.content, styles.root]}>
                <Animated.View style={[styles.choice, {marginTop: 40}, {opacity: this.state.opacity1}]}>
                    <Heading size={3} style={styles.title}>User Experience</Heading>
                    <Image source={bluePill} style={[styles.image, {height: 100, width: 100}]}/>
                </Animated.View>
                <View style={[styles.or, styles.center]}>
                    <Heading size={1} style={styles.header}>?</Heading>
                </View>
                <Animated.View style={[styles.choice, {marginBottom: 40}, {opacity: this.state.opacity2}]}>
                    <Heading size={3} style={styles.title}>Developer Experience</Heading>
                    <Image source={redPill} style={[styles.image, {height: 100, width: 100}]}/>
                </Animated.View>
            </View>
        );
    }

}))

export default stepped(React, 3)(Component)
