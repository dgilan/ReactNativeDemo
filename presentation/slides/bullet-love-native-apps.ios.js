import React, { createClass, View, Image, Text, Animated, Easing, PropTypes, StyleSheet } from 'react-native'
import extend from '../../src/utils/extend'
//import stepped from '../../src/utils/stepped';
import Lang from '../language/bullet-love-native-apps.en'
import BaseComponent from './common/bullet-love-native-apps'
import List from '../../src/components/list'
import Heading from '../../src/components/heading'

const Component = createClass(extend(BaseComponent, {
    //getInitialState(){
    //    return {
    //        opacity: new Animated.Value(0),
    //        marginRight: new Animated.Value(-50)
    //    }
    //},
    //
    //componentWillReceiveProps(props){
    //    if (props.step < this.props.step) {
    //        this._previousStepAnimation()
    //    } else if (props.step > this.props.step) {
    //        this._nextStepAnimation()
    //    }
    //},
    //
    //_nextStepAnimation(){
    //    Animated.parallel([
    //        Animated.timing(this.state.opacity, {
    //            toValue: 1
    //        }),
    //        Animated.timing(this.state.marginRight, {
    //            toValue: 0
    //        })
    //    ]).start()
    //},
    //
    //_previousStepAnimation(){
    //    Animated.parallel([
    //        Animated.timing(this.state.opacity, {
    //            toValue: 0,
    //            duration: 0
    //        }),
    //        Animated.timing(this.state.marginRight, {
    //            toValue: -50,
    //            duration: 0
    //        })
    //    ]).start()
    //},
    //
    //renderImage() {
    //    return (
    //        <Animated.Image
    //            source={this.props.image}
    //            style={{flex: 1, width:100, height: 100, opacity: this.state.opacity, marginRight: this.state.marginRight}}/>
    //
    //    );
    //},

    contextTypes: {
        styles: PropTypes.object
    },

    renderBullets() {
        const styles = StyleSheet.create(this.context.styles.slides.bulletLoveNativeApps)

        return (
            <List dataSource={Lang.PROPS.map((item)=>{return ` - ${item}`})} style={styles.list}/>
        );
    },

    render() {
        const common = StyleSheet.create(this.context.styles.slides.common)
        const styles = StyleSheet.create(this.context.styles.slides.bulletLoveNativeApps)
        return (
            <View style={[common.content, styles.content]}>
                <Heading size={3} style={styles.header}>{Lang.HEADER}</Heading>
                <View>{this.renderBullets()}</View>
            </View>
        )
    }
}))

//export default stepped(React, 2)(Component)
export default Component