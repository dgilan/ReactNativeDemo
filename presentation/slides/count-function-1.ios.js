import React, { createClass, PropTypes, Image, StyleSheet, View, Dimensions } from 'react-native'
import stepped from '../../src/utils/stepped'
import assign from 'lodash.assign'

const images = [
    require('../images/ui-f-count.jpg'),
    require('../images/ui-f-count-2.jpg'),
    require('../images/ui-f-count-3.jpg'),
    require('../images/ui-f-count-4.jpg'),
    require('../images/ui-f-count-5.jpg'),
    require('../images/ui-f-count-6.jpg')
]

const Component = createClass({

    propTypes: {
        step: PropTypes.number.isRequired
    },

    contextTypes: {
        styles: PropTypes.object
    },

    render() {
        const styles = StyleSheet.create(assign({},
            this.context.styles.slides.common,
            this.context.styles.slides.countExample
        ))

        const { width, height } = Dimensions.get('window')

        return (
            <View style={styles.content}>
                <Image source={images[this.props.step]} resizeMode="contain" style={{width, height}}/>
            </View>
        );
    }

})

export default stepped(React, 6)(Component)