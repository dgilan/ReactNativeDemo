import React, { createClass, View, Image, Text } from 'react-native'
import extend from '../../src/utils/extend'
import Lang from '../language/intro.en.js'
import BaseComponent from './common/intro'

export default createClass(extend(BaseComponent, {
    render() {
        return (
            <View>
                <View>
                    <Image source={(this.props.logo)} style={{width: 150, height: 150}}/>
                </View>
                <View>
                    <Text>
                        {Lang.HEADER}
                    </Text>
                    <Text>
                        {Lang.DESCRIPTION}
                    </Text>
                </View>
            </View>
        )
    }
}))
