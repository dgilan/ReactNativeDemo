import React, { createClass, PropTypes, StyleSheet, Image, View, Animated, Dimensions } from 'react-native'
import stepped from '../../src/utils/stepped'
import Heading from '../../src/components/heading'
import Lang from '../language/two-ways-to-differ.en'
import assign from 'lodash.assign'


const code1 = require('../images/code1.png')
const code2 = require('../images/code2.png')

const Component = createClass({

    propTypes: {
        step: PropTypes.number.isRequired
    },

    contextTypes: {
        styles: PropTypes.object
    },

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
        if (step < num) {
            return 0
        }
        return 1
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
            this.context.styles.slides.twoWaysToDiffer
        ))

        const { step } = this.props;
        const { width } = Dimensions.get('window')

        return (
            <View style={styles.content}>
                <Heading size={4} style={styles.header}>{Lang.HEADER1 + ' ' + Lang.HEADER2}</Heading>
                <Animated.Image source={code1} style={{width: width, opacity: this.state.opacity1}}/>
                <Animated.Image source={code2}
                                style={{width: width, height: 30, marginTop: 20, opacity:this.state.opacity2}}/>
            </View>

        );
    }

})

export default stepped(React, 3)(Component)
