import React, { createClass, PropTypes, Image, StyleSheet, View } from 'react-native'
import assign from 'lodash.assign'
import Heading from '../../src/components/heading'
import Lang from '../language/facebook-ads-manager.en'
import List from '../../src/components/list'
import Text from '../../src/components/text'

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
            this.context.styles.slides.facebookAdsManager,
            {
                center: this.context.styles.center,
                listItem: this.context.styles.components.listItem
            }
        ))

        const { logo } = this.props
        const description = Lang.DESCRIPTION.map((item, index)=> {
            const last = index === (Lang.DESCRIPTION.length - 1) ? {fontWeight: 'bold', fontFamily: 'Arial'} : null
            return (
                <Text style={[styles.listItem, styles.item, last]} key={index}>{`- ${item}`}</Text>
            )
        })

        return (
            <View style={styles.content}>
                <View style={[styles.center, {marginTop: 50}]}>
                    <Image source={logo} style={{width: 100, height: 100}}/>
                    <Heading size={3} style={styles.header}>{Lang.HEADER}</Heading>
                </View>
                <List>
                    {description}
                </List>
            </View>
        );
    }

})

