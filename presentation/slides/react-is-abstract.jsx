import React from 'react';
import { Row, Col } from 'elemental';
import { Image, Heading } from '../../src/spectacle';
import Lang from '../language/react-is-abstract'

const image1 = require('../images/react-is-abstract_1.jpg').replace('/','');
const image2 = require('../images/react-is-abstract_2.jpg').replace('/','');

export default class ReactIsAbstract extends React.Component {

    static propTypes = {
        step: React.PropTypes.number.isRequired
    };

    render() {
        return (
            <div>
                <Row>
                    <Col xs='1/2'>
                        <Heading size={2} textColor='darkPrimary'>{Lang.HEADER}</Heading>
                        <Heading size={2} textColor='darkPrimary'>{Lang.DESCRIPTION[0]}</Heading>
                        <Heading size={2} textColor='darkPrimary'>{Lang.DESCRIPTION[1]}</Heading>
                        <Image src={image1} width="100%" style={{marginTop: '40px'}}/>
                    </Col>
                    <Col xs='1/2'>
                        <Image src={image2} width="100%"/>
                    </Col>
                </Row>
            </div>
        );
    }

}
