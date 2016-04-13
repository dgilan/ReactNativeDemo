import React from 'react';
import { Row, Col } from 'elemental';
import { Image, Text } from '../../src/spectacle';
import Lang from '../language/react-styles'

const image = require('../images/flexbox.jpg');

export default class ReactStyles extends React.Component {

    static propTypes = {
        step: React.PropTypes.number.isRequired
    };

    render() {
        const { logo } = this.props
        return (
            <Row>
                <Col xs="1/3">
                    <Image src={logo} style={{width: 150, height: 150, marginTop: '150px'}}/>
                    <Text textColor='darkPrimary'>{Lang.HEADER}</Text>
                    <Text textColor='darkPrimary'>{Lang.STYLES}</Text>
                </Col>
                <Col xs="2/3">
                    <Image src={image} width='100%' style={{marginLeft: '30px'}}/>
                </Col>
            </Row>
        );
    }

}
