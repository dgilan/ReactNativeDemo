import React, { createClass } from 'react'
import { Heading, Image, Layout, Fill } from '../../src/spectacle'
import extend from '../../src/utils/extend'
import Lang from '../language/why-do-we-love-native-apps'
import BaseComponent from './common/why-do-we-love-native-apps'

export default createClass(extend(BaseComponent, {
    render() {
        return (
            <Layout>
                <Fill>
                    <Heading size={2} textColor='darkPrimary'>{Lang.HEADER_1}</Heading>
                    <Image src={this.props.like} width='30%'/>
                    <Heading size={2} textColor='darkPrimary'>{Lang.HEADER_2}</Heading>
                </Fill>
            </Layout>
        );
    }
}))
