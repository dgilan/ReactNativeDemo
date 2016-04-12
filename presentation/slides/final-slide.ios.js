import React, { createClass, PropTypes, View, StyleSheet } from 'react-native'
import assign from 'lodash.assign'
import Heading from '../../src/components/heading'

export default createClass({
    contextTypes: {
        styles: PropTypes.object
    },

    render() {
        const styles = StyleSheet.create(assign({},
            this.context.styles.slides.common,
            this.context.styles.slides.finalSlide
        ))

        return (
            <View style={styles.content}>
                <Heading size={3} style={styles.header}>Thanks!</Heading>
            </View>
        );
    }
})
