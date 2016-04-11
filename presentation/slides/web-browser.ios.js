import React, { createClass, View, PropTypes, StyleSheet, Text } from 'react-native'
import Heading from '../../src/components/heading'
import assign from 'lodash.assign'

export default createClass({
    contextTypes: {
        styles: PropTypes.object
    },

    render() {
        const styless = {
            heading: {
                size: 2,
                textColor: 'darkPrimary',
                caps: true,
                style: {
                    display: 'inline-block',
                    position: 'relative',
                    fontWeight: '700',
                    lineHeight: '2em'
                }
            },
            spanLeft: {
                style: {
                    position: 'absolute',
                    left: '-180px',
                    top: '-22px',
                    fontSize: '240px'
                }
            },
            spanRight: {
                style: {
                    position: 'absolute',
                    right: '-180px',
                    top: '-22px',
                    fontSize: '240px'
                }
            }
        };

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
