import React, { createClass, StyleSheet } from 'react-native'
import Text from './text'
import extend from '../utils/extend'
import assign from 'lodash.assign'
import Base, {BaseComponent} from "./base";
import HeadingBaseComponent from './common/heading'

const Heading = createClass(extend(BaseComponent, HeadingBaseComponent, {

    render() {
        const { size, children, style } = this.props
        const tag = `h${size}`
        const styles = StyleSheet.create(this.context.styles.components.heading)

        return (
            <Text style={[styles[tag], this.getStyles(), style]}>{children}</Text>
        )
    }
}))

export default Heading;
