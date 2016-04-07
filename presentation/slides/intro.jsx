import React, { createClass } from 'react'
import { Heading, Image, Layout, Fill } from '../../src/spectacle'
import extend from '../../src/utils/extend'
import Lang from '../language/intro'
import BaseComponent from './common/intro'

export default createClass(extend(BaseComponent, {
    render() {
        return (
            <div>
                <Layout>
                    <Fill>
                        <Image src={this.props.logo} width='270px'/>
                    </Fill>
                </Layout>
                <Layout>
                    <Fill>
                        <Heading size={1} caps textColor='darkPrimary'>
                            {Lang.HEADER}
                        </Heading>
                        <Heading size={6} fontNormal textColor='darkPrimary'>
                            {Lang.DESCRIPTION}
                        </Heading>
                    </Fill>
                </Layout>
            </div>
        )
    }
}))
