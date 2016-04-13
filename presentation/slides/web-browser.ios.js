import React, { createClass, View, PropTypes, StyleSheet } from 'react-native'
import Heading from '../../src/components/heading'
import Text from '../../src/components/text'
import assign from 'lodash.assign'

export default createClass({
    contextTypes: {
        styles: PropTypes.object
    },

    render() {
        const styles = StyleSheet.create(assign({
            content: this.context.styles.slides.common.content
        }, this.context.styles.slides.webBrowser))

        return (
            <View style={[styles.content, styles.root]}>

                <Heading size={2} style={styles.quote}>&lt;</Heading>
                <Text style={styles.header}>{'Web Browser'.toUpperCase()}</Text>
                <Heading size={2} style={styles.quote}>&gt;</Heading>

            </View>
        );
    }

})
