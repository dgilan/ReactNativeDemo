import React, { createClass, View, StyleSheet, Animated, Text, Image, Dimensions } from 'react-native'
import stepped from '../../src/utils/stepped'
import BaseComponent from './common/how-web-solved-problems'
import extend from '../../src/utils/extend'
import List from '../../src/components/list'
import Heading from '../../src/components/heading'

const maxStep = 3
const Component = createClass(extend(BaseComponent, {

    getInitialState(){
        return {
            opacity1: new Animated.Value(0.3),
            opacity2: new Animated.Value(0.3),
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
            return 0.3
        }

        if (step === num || step === maxStep - 1) {
            return 1
        }

        return 0
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
                toValue: 0.3,
                duration: 0
            }),
            Animated.timing(this.state.opacity2, {
                toValue: 0.3,
                duration: 0
            })
        ]).start()
    },

    renderNativeList() {
        const { step } = this.props
        const styles = StyleSheet.create(this.context.styles.slides.howWebSolvedProblems)
        const listStyles = StyleSheet.create({listItem: this.context.styles.components.listItem})
        const styleForStep = (index)=> {
            return (step >= index) ? {textDecorationLine: 'line-through'} : {}
        }

        return (
            <View style={styles.half}>
                <Heading style={styles.header} size={3}>Native</Heading>
                <List style={{marginTop: 20}}>
                    <Text style={listStyles.listItem}>- <Text style={{textDecorationLine: 'line-through'}}>Разный стек
                        технологий</Text></Text>
                    <Animated.Text style={[listStyles.listItem, {opacity: this.state.opacity1}]}>- <Text
                        style={styleForStep(1)}>
                        Нет переиспользования кода</Text>
                    </Animated.Text>
                    <Animated.Text style={[listStyles.listItem, {opacity: this.state.opacity2}]}>- <Text
                        style={styleForStep(2)}>
                        Билд на каждое изменение</Text>
                    </Animated.Text>
                </List>
            </View>
        );
    },

    renderWebList() {
        const { step } = this.props;
        const styles = StyleSheet.create(this.context.styles.slides.howWebSolvedProblems)
        const centerStyles = StyleSheet.create({center: this.context.styles.center})
        const styleForStep = (index)=> {
            return [centerStyles.center]
        }

        const firstStep = (
            <View style={styleForStep(0)}>
                <Image source={this.props.image} style={{width:200, height: 120}}/>
            </View>
        );

        const secondStep = (
            <View style={styleForStep(1)}>
                <Heading size={1} style={styles.listItem}>
                    ∞
                </Heading>
                <Heading size={2} style={styles.listItem}>
                    JS библиотек
                </Heading>
            </View>
        );

        const thirdStep = (
            <View style={styleForStep(2)}>
                <Heading size={4} style={styles.listItem}>
                    Изменить
                </Heading>
                <Heading size={1} style={styles.listItem}>
                    ▾
                </Heading>
                <Heading size={4} style={styles.listItem}>
                    Обновить
                </Heading>
            </View>
        );

        return (
            <View style={[styles.half]}>
                <Heading style={[styles.header, styles.lightHeader]} size={3}>Web</Heading>
                <View style={{flex: 1, alignItems: 'center'}}>
                    {step === 0 ? firstStep : null}
                    {step === 1 ? secondStep : null}
                    {step === 2 ? thirdStep : null}
                </View>
            </View>
        );
    },

    render() {
        const commonStyles = StyleSheet.create(this.context.styles.slides.common)

        return (
            <View style={commonStyles.content}>
                {this.renderNativeList()}
                {this.renderWebList()}
            </View>
        );
    }
}))

export default stepped(React, 3)(Component)
