import React, { createClass, PropTypes, View, StyleSheet, Image } from 'react-native'
import Lang from '../language/web-solves-this-problem.en'
import Heading from '../../src/components/heading'

export default createClass({

    propTypes: {
        image: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    },

    contextTypes: {
        styles: PropTypes.object
    },

    render() {
        const common = StyleSheet.create(this.context.styles.slides.common)
        const styles = StyleSheet.create(this.context.styles.slides.webSolvesThisProblem)

        return (
            <View style={common.content}>
                <Image source={this.props.image} style={{width: 70, height: 70, marginBottom: 40}}/>
                <Heading size={3} style={styles.header}>{Lang.HEADER_1}</Heading>
                <Heading size={3} style={styles.header}>{Lang.HEADER_2}</Heading>
            </View>
        );
    }

})
