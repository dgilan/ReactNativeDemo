import React, { createClass, StyleSheet, PropTypes, View } from 'react-native'
import Base, { BaseComponent } from "./base";
import SlideBaseComponent from './common/slide';
import extend from '../utils/extend'

const Slide = createClass(extend(BaseComponent, SlideBaseComponent, {
    render() {
        const { children, style } = this.props
        const styles = StyleSheet.create({slide: this.context.styles.components.slide})

        return (
            <View style={[styles.slide, this.getStyles(), style]}>{children}</View>
        )
    }
}))

export default Slide;
