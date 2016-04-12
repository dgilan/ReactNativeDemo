import React, { createClass, PropTypes, Image, StyleSheet, View } from 'react-native'
import assign from 'lodash.assign'
import Heading from '../../src/components/heading'
import Lang from '../language/react-benefits.en'
import List from '../../src/components/list'

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
            this.context.styles.slides.reactBenefits,
            {center: this.context.styles.center}
        ))

        const { logo } = this.props

        return (
            <View style={styles.content}>
                <View style={[styles.center, {marginTop: 40}]}>
                    <Image source={logo} style={{width: 100, height: 100}}/>
                    <Heading size={3} style={styles.header}>{Lang.HEADER}</Heading>
                </View>
                <List dataSource={Lang.DESCRIPTION.map(item=>{return `- ${item}`})} itemStyle={styles.listItem}/>
            </View>
        );
    }

})

