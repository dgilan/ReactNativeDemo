import React, { createClass, PropTypes, Image, StyleSheet, View, Dimensions } from 'react-native'
import assign from 'lodash.assign'
import Heading from '../../src/components/heading'
import Lang from '../language/tags.en'

const image = require('../images/tags_1.jpg')

export default createClass({

    propTypes: {
        logo: PropTypes.number,
    },

    contextTypes: {
        styles: PropTypes.object
    },

    render() {
        const styles = StyleSheet.create(assign({},
            this.context.styles.slides.common,
            this.context.styles.slides.tags,
            {center: this.context.styles.center}
        ))

        const { width, height } = Dimensions.get('window')
        const { logo } = this.props

        return (
            <View style={[styles.content, styles.root]}>
                <View style={styles.center}>
                    <Image source={logo} style={{width: 100, height: 100}}/>
                    <Heading size={3} style={styles.header}>{Lang.HEADER}</Heading>
                    <Heading size={3} style={styles.header}>{Lang.COMPONENTS}</Heading>
                </View>
                <Image source={image} style={{width: width - 10, height: height/2}} resizeMode="contain"/>
            </View>
        );
    }

})

