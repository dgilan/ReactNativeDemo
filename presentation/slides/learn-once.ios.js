import React, { createClass, PropTypes, Image, StyleSheet, View, Dimensions } from 'react-native'
import assign from 'lodash.assign'

const image = require('../images/learn-once.jpg')

export default createClass({

    contextTypes: {
        styles: PropTypes.object
    },

    render() {
        const styles = StyleSheet.create(assign({},
            this.context.styles.slides.common,
            this.context.styles.slides.learnOnce
        ))

        const { width, height } = Dimensions.get('window')

        return (
            <View style={styles.content}>
                <Image source={image} resizeMode="contain" style={{width, height}}/>
            </View>
        );
    }

})

