import React, { createClass, StyleSheet, PropTypes, View, Image, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Base, { BaseComponent } from "./base";
import SlideBaseComponent from './common/slide';
import extend from '../utils/extend'

const Slide = createClass(extend(BaseComponent, SlideBaseComponent, {
    renderGradient(content){
        if (this.props.bgDarken) {
            const {height, width} = Dimensions.get('window')
            const styles = this.context.styles
            const style = StyleSheet.create({center: styles.center})
            const color = `rgba(0,0,0,${this.props.bgDarken})`
            return (
                <LinearGradient colors={[color, color]} style={[style.center, {height, width}]}>
                    {content}
                </LinearGradient>
            )
        } else {
            return content
        }
    },

    renderBackGround(content){
        if (!this.props.bgImage && !this.props.bgImageIos) {
            return content
        } else {

            const image = this.props.bgImageIos || this.props.bgImage
            const {height, width} = Dimensions.get('window')
            const styles = this.context.styles
            const style = StyleSheet.create({image: styles.backgroundImage, center: styles.center})

            return (
                <Image style={[style.image, style.center, {height, width}]} source={image}>
                    {this.renderGradient(content)}
                </Image>)
        }
    },

    render()
    {
        const { children, style } = this.props
        const styles = StyleSheet.create({slide: this.context.styles.components.slide})


        return this.renderBackGround(
            <View style={[styles.slide, this.getStyles(), style]}>{children}</View>
        )
    }
}))

export default Slide;
