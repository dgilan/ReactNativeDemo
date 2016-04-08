import React, { createClass, View, Image, Text, PropTypes, StyleSheet } from 'react-native'
import extend from '../../src/utils/extend'
import Lang from '../language/why-do-we-love-native-apps.en'
import BaseComponent from './common/why-do-we-love-native-apps'
import Heading from '../../src/components/heading'

export default createClass(extend(BaseComponent, {
    contextTypes: {
        styles: PropTypes.object
    },

    render() {
        const common = StyleSheet.create(this.context.styles.slides.common)
        const styles = StyleSheet.create(this.context.styles.slides.whyDoWeLoveNativeApps)

        return (
            <View style={[common.content, styles.content]}>
                <Heading size={2} style={styles.header}>{Lang.HEADER_1}</Heading>
                <Image source={this.props.like} style={{width: 100, height: 100}}/>
                <Heading size={2} style={styles.header}>{Lang.HEADER_2}</Heading>
            </View>
        )
    }
}))
