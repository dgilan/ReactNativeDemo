import React, { createClass, PropTypes, Image, View, StyleSheet, Dimensions } from 'react-native'
import assign from 'lodash.assign'
import Lang from '../language/react-is-abstract-2.en'
import Heading from '../../src/components/heading'

const image1 = require('../images/react-is-abstract-2_1.jpg');
const image2 = require('../images/react-is-abstract-2_2.jpg');

export default createClass({

    contextTypes: {
        styles: PropTypes.object
    },

    render() {
        const styles = StyleSheet.create(assign({},
            this.context.styles.slides.common,
            this.context.styles.slides.reactIsAbstract,
            {center: this.context.styles.center}
        ))

        const width = Dimensions.get('window').width / 2 - 10

        const headers = Lang.PROPS.map((item, index)=> {
            return <Heading size={3} style={styles.header} key={index}>{item}</Heading>
        })

        return (
            <View style={styles.content}>
                <View style={styles.center}>
                    {headers}
                </View>
                <View style={styles.row}>
                    <View style={[styles.column, styles.center]}>
                        <Image source={image1} style={{width}} resizeMode="contain"/>
                    </View>
                    <View style={[styles.column, styles.center]}>
                        <Image source={image2} style={{width}} resizeMode="contain"/>
                    </View>
                </View>
            </View>
        );
    }

})
