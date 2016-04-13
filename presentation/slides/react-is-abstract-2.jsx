import React from 'react';
import { Row, Col } from 'elemental';
import { Image, Heading } from '../../src/spectacle';
import Lang from '../language/react-is-abstract-2'

const image1 = require('../images/react-is-abstract-2_1.jpg');
const image2 = require('../images/react-is-abstract-2_2.jpg');

export default class ReactIsAbstract2 extends React.Component {

    static propTypes = {
        step: React.PropTypes.number.isRequired
    };

    render() {

        const headers = Lang.PROPS.map((item, index)=> {
            return <Heading size={3}  textColor='darkPrimary' key={index}>{item}</Heading>
        })

        return (
            <div>
                <Row>
                    <Col xs='1/2'>
                        {headers}
                        <Image src={image1} width="100%" style={{marginTop: '40px'}}/>
                    </Col>
                    <Col xs='1/2'>
                        <Image src={image2} width="70%"/>
                    </Col>
                </Row>
            </div>
        );
    }

}
