import React, { createClass, StyleSheet, Text } from 'react-native'
import Base from "./base";

export default createClass({

    displayName: 'CustomText',

    mixins: [Base.Mixin],

    contextTypes: {
        styles: React.PropTypes.object
    },

    render(){
        const { style, children } = this.props
        const styles = StyleSheet.create(this.context.styles.global.body)

        return (
            <Text style={[styles.text, style]}>{children}</Text>
        )
    }

})
