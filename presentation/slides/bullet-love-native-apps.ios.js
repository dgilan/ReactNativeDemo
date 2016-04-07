import React, { createClass, View, Image, Text, ListView, Animated, Easing } from 'react-native'
import extend from '../../src/utils/extend'
import stepped from '../../src/utils/stepped';
import Lang from '../language/bullet-love-native-apps.en'
import BaseComponent from './common/bullet-love-native-apps'

const Component = createClass(extend(BaseComponent, {
    //
    //renderImage() {
    //    return (
    //        <VelocityComponent
    //            animation={{opacity: this.props.step > 0 ? 1 : 0,marginRight: this.props.step > 0 ? '0' : '-50'}}
    //            duration={500}>
    //            <Image src={this.props.image} width="100%"/>
    //        </VelocityComponent>
    //    );
    //},

    getInitialState(){
        return {
            opacity: new Animated.Value(0),
            marginRight: new Animated.Value(-50)
        }
    },

    componentWillUnMount(){
console.log('unmount')
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
            Animated.timing(this.state.marginRight, {
                toValue: 0
            })
        ]).start()
    },

    _previousStepAnimation(){
        console.log('previous step');
        Animated.parallel([
            Animated.timing(this.state.opacity, {
                toValue: 0
            }),
            Animated.timing(this.state.marginRight, {
                toValue: -50
            })
        ]).start()
    },

    renderImage() {
        console.log('render', this.state.opacity);
        return (
            <Animated.Image
                source={this.props.image}
                style={{flex: 1, width:100, height: 100, opacity: this.state.opacity, marginRight: this.state.marginRight}}/>

        );
    },

    renderBullets() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const renderRow = (data) => {
            return <Text>{data}</Text>
        };

        return (
            <ListView dataSource={ds.cloneWithRows(Lang.PROPS.map((item)=>{return ` - ${item}`}))}
                      renderRow={renderRow}/>
        );
    },

    render() {
        return (
            <View>
                <View>{this.renderBullets()}</View>
                <View>{this.renderImage()}</View>
            </View>
        )
    }
}))

export default stepped(React, 2)(Component)
