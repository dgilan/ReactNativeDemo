import React, { createClass, View, Image, Text, StyleSheet, PropTypes } from 'react-native'
import extend from '../../src/utils/extend'
import Lang from '../language/intro.en.js'
import BaseComponent from './common/intro'
import Heading from '../../src/components/heading'

export default createClass(extend(BaseComponent, {

    contextTypes: {
        styles: PropTypes.object
    },

    render() {
        const common = StyleSheet.create(this.context.styles.slides.common)
        const styles = StyleSheet.create(this.context.styles.slides.intro)

        return (
            <View style={[common.content, styles.content]}>
                <Image source={(this.props.logo)} style={styles.image}/>

                <Heading style={styles.header}>
                    {Lang.HEADER.toUpperCase()}
                </Heading>

                <Heading size={6} style={styles.description}>
                    {Lang.DESCRIPTION}
                </Heading>
            </View>
        )
    }
}))
