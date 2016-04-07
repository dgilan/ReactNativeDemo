import React, { createClass, View, Image, Text } from 'react-native'
import extend from '../../src/utils/extend'
import Lang from '../language/why-do-we-love-native-apps.en'
import BaseComponent from './common/why-do-we-love-native-apps'

export default createClass(extend(BaseComponent, {
    render() {
        return (
            <View>
                <View>
                    <Text>{Lang.HEADER_1}</Text>
                    <Image source={this.props.like} style={{width: 150, height: 150}}/>
                    <Text>{Lang.HEADER_2}</Text>
                </View>
            </View>
        )
    }
}))
