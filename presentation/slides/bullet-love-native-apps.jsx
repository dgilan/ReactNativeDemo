import React, { createClass, PropTypes } from 'react';
import { Row, Col } from 'elemental';
import { Heading, Image, List, ListItem } from '../../src/spectacle';
import { VelocityComponent } from 'velocity-react';
import stepped from '../../src/utils/stepped';
import extend from '../../src/utils/extend'
import Lang from '../language/bullet-love-native-apps.en'
import BaseComponent from './common/bullet-love-native-apps'

const Component = createClass(extend(BaseComponent, {
    propTypes: {
        step: PropTypes.number.isRequired,
        onUpdateStep: PropTypes.func.isRequired,
    },

    renderImage() {
        return (
            <VelocityComponent
                animation={{opacity: this.props.step > 0 ? 1 : 0,marginRight: this.props.step > 0 ? '0' : '-50'}}
                duration={500}>
                <Image src={this.props.image} width="100%"/>
            </VelocityComponent>
        );
    },

    renderBullets() {
        const items = Lang.PROPS.map((item, i) => {
            return <ListItem key={i}>{item}</ListItem>
        });

        return (
            <List>
                {items}
            </List>
        );
    },

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Heading size={3} textColor='darkPrimary'
                                 style={{ marginTop: '-150px' }}>{Lang.HEADER}</Heading>
                    </Col>
                </Row>
                <Row>
                    <Col xs='2/3'>
                        { this.renderBullets() }
                    </Col>
                    <Col xs='1/3'>
                        { this.renderImage() }
                    </Col>
                </Row>
            </div>
        );
    }
}))

export default stepped(React, 2)(Component)
