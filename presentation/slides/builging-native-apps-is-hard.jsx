import React, { createClass, PropTypes } from 'react'
import { VelocityComponent } from 'velocity-react'
import { Row, Col } from 'elemental'

import { Heading, Image, List, ListItem } from '../../src/spectacle'
import stepped from '../../src/utils/stepped'
import extend from '../../src/utils/extend'
import Lang from '../language/builging-native-apps-is-hard'
import BaseComponent from './common/builging-native-apps-is-hard'

const Component = createClass(extend(BaseComponent, {

    render() {
        const { step } = this.props;

        return (
            <div>
                <Heading size={2} textColor='primary' style={{ marginTop: '-100px'}}>{Lang.HEADER}</Heading>
                <VelocityComponent
                    animation={{opacity: step > 0 ? 1 : 0,marginBottom: step > 0 ? '0' : '-100'}}
                    duration={500}>
                    <Heading size={2} textColor='primary'>
                        {Lang.DESCRIPTION}
                    </Heading>
                </VelocityComponent>
            </div>
        );
    }

}))

export default stepped(React, 2)(Component)

