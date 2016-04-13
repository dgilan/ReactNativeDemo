import React, { createClass, View, PropTypes, StyleSheet, Image } from 'react-native'
import Lang from '../language/both-is-important.en'
import Heading from '../../src/components/heading'
import assign from 'lodash.assign'

const redBluePill = require('../images/red-blue-pill.png');

export default createClass({
    contextTypes: {
        styles: PropTypes.object
    },

    render() {
        const styless = {
            heading: {
                size: 4,
                textColor: 'light',
                marginBottom: '-100px'
            }
        };

        const styles = StyleSheet.create(assign({},
            this.context.styles.slides.common,
            this.context.styles.slides.bothIsImportant,
            {center: this.context.styles.center}
        ))

        const content = Lang.PROPS.map((item, index)=> {
            return <Heading size={4} key={index} style={styles.header}>{item}</Heading>
        })

        return (
            <View style={styles.content}>
                {content}
                <Image source={redBluePill} style={{width: 300, height: 300}}/>
            </View>
        );
    }
})
