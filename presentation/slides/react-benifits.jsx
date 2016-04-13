import React from 'react';
import { Row, Col } from 'elemental';
import { Image, Heading } from '../../src/spectacle';
import Lang from '../language/react-benefits.en'

export default class ReactBenefits extends React.Component {

    static propTypes = {
        step: React.PropTypes.number.isRequired
    };

    render() {
        const {logo} = this.props

        const benefits = Lang.DESCRIPTION.map((item, index)=> {
            return <Heading size="6" textColor="darkPrimary" key={index}>{item}</Heading>
        })

        return (
            <Row>
                <Col xs="1/3">
                    <Image src={logo} width='50%'/>
                    <Heading size="4" textColor="darkPrimary">{Lang.HEADER}</Heading>
                </Col>
                <Col xs="2/3">
                    {benefits}
                </Col>
            </Row>
        );
    }

}
